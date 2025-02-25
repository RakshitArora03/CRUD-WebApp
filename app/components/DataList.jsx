"use client"

import { useState } from "react"
import AddEditModal from "./AddEditModal"
import ReadModal from "./ReadModal"
import DeleteModal from "./DeleteModal"
import toast from "react-hot-toast"

export default function DataList({ data, columns, onAdd, onEdit, onDelete, title }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isReadModalOpen, setIsReadModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const itemsPerPage = 10
  const totalPages = Math.ceil(data?.length / itemsPerPage)

  if (!data || data.length === 0) {
    return <div className="text-center p-4">No data available</div>
  }

  // Calculate current page data
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = data.slice(startIndex, endIndex)

  const handleAdd = (newItem) => {
    onAdd(newItem)
    setIsAddModalOpen(false)
    toast.success("Item added successfully")
  }

  const handleEdit = (editedItem) => {
    onEdit(editedItem)
    setIsEditModalOpen(false)
    toast.success("Item updated successfully")
  }

  const handleDelete = () => {
    onDelete(selectedItem.id)
    setIsDeleteModalOpen(false)
    toast.success("Item deleted successfully")
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title} List</h2>
        <button className="btn btn-primary" onClick={() => setIsAddModalOpen(true)}>
          Add New
        </button>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="w-16">ID</th>
              {columns.map((column) => (
                <th key={column.key}>{column.header}</th>
              ))}
              <th className="w-48 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.key === "photo" ? (
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.id}`} alt="Avatar" />
                        </div>
                      </div>
                    ) : (
                      item[column.key]
                    )}
                  </td>
                ))}
                <td className="text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      className="btn btn-info btn-xs"
                      onClick={() => {
                        setSelectedItem(item)
                        setIsReadModalOpen(true)
                      }}
                    >
                      Read
                    </button>
                    <button
                      className="btn btn-warning btn-xs"
                      onClick={() => {
                        setSelectedItem(item)
                        setIsEditModalOpen(true)
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => {
                        setSelectedItem(item)
                        setIsDeleteModalOpen(true)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="join flex justify-center">
          <button
            className="join-item btn btn-sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            «
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1) ||
              (currentPage <= 3 && pageNumber <= 5) ||
              (currentPage >= totalPages - 2 && pageNumber > totalPages - 5)
            ) {
              return (
                <button
                  key={pageNumber}
                  className={`join-item btn btn-sm ${currentPage === pageNumber ? "btn-active" : ""}`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            } else if (
              (currentPage > 3 && pageNumber === 2) ||
              (currentPage < totalPages - 2 && pageNumber === totalPages - 1)
            ) {
              return (
                <button key={pageNumber} className="join-item btn btn-sm btn-disabled">
                  ...
                </button>
              )
            }
            return null
          })}
          <button
            className="join-item btn btn-sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      )}

      <AddEditModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAdd}
        columns={columns}
      />

      <AddEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEdit}
        item={selectedItem}
        columns={columns}
      />

      <ReadModal
        isOpen={isReadModalOpen}
        onClose={() => setIsReadModalOpen(false)}
        item={selectedItem}
        columns={columns}
      />

      <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onDelete={handleDelete} />

    </div>
  )
}

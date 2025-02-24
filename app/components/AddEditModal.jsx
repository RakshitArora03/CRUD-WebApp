"use client"

import { useState, useEffect } from "react"

export default function AddEditModal({ isOpen, onClose, onSubmit, item, columns }) {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (item) {
      setFormData(item)
    } else {
      const initialData = {}
      columns.forEach((column) => {
        if (column.key !== "id" && column.key !== "photo") {
          initialData[column.key] = ""
        }
      })
      setFormData(initialData)
    }
  }, [item, columns])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{item ? "Edit" : "Add New"}</h2>
        <form onSubmit={handleSubmit}>
          {columns.map((column) => {
            if (column.key !== "id" && column.key !== "photo") {
              return (
                <div key={column.key} className="mb-4">
                  <label htmlFor={column.key} className="block mb-2">
                    {column.header}
                  </label>
                  <input
                    type="text"
                    id={column.key}
                    name={column.key}
                    value={formData[column.key] || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
              )
            }
            return null
          })}
          <div className="flex justify-end gap-2 mt-6">
            <button type="button" onClick={onClose} className="btn btn-ghost">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {item ? "Apply" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

;
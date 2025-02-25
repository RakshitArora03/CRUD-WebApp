"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import DataList from "../components/DataList"
import LoadingSpinner from "../components/LoadingSpinner"
import api from "../services/api"

const columns = [
  { key: "photo", header: "Photo" },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
]

export default function UsersPage() {
  const queryClient = useQueryClient()

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: api.fetchUsers,
  })

  const addMutation = useMutation({
    mutationFn: api.addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    },
  })

  const updateMutation = useMutation({
    mutationFn: api.updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    },
  })

  const deleteMutation = useMutation({
    mutationFn: api.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    },
  })

  const handleAdd = (newUser) => {
    addMutation.mutate(newUser)
  }

  const handleEdit = (editedUser) => {
    updateMutation.mutate(editedUser)
  }

  const handleDelete = (id) => {
    deleteMutation.mutate(id)
  }

  if (isLoading) return <LoadingSpinner/>

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 flex-1 bg-gray-100">
        <DataList title="Users" data={users} columns={columns} onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  )
}


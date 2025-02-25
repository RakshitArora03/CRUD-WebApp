"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import DataList from "../components/DataList"
import api from "../services/api"
import LoadingSpinner from "../components/LoadingSpinner"

const columns = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "body", header: "Comment" },
]

export default function CommentsPage() {
  const queryClient = useQueryClient()

  const { data: comments, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: api.fetchComments,
  })

  const addMutation = useMutation({
    mutationFn: api.addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"])
    },
  })

  const updateMutation = useMutation({
    mutationFn: api.updateComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"])
    },
  })

  const deleteMutation = useMutation({
    mutationFn: api.deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"])
    },
  })

  const handleAdd = (newComment) => {
    addMutation.mutate(newComment)
  }

  const handleEdit = (editedComment) => {
    updateMutation.mutate(editedComment)
  }

  const handleDelete = (id) => {
    deleteMutation.mutate(id)
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 flex-1 bg-gray-100">
        <DataList title="Comments"data={comments} columns={columns} onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  )
}


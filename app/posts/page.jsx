"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import DataList from "../components/DataList"
import LoadingSpinner from "../components/LoadingSpinner"
import api from "../services/api"

const columns = [
  { key: "title", header: "Title" },
  { key: "body", header: "Content" },
  { key: "userId", header: "User ID" },
]

export default function PostsPage() {
  const queryClient = useQueryClient()

  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: api.fetchPosts,
  })

  const addMutation = useMutation({
    mutationFn: api.addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
    },
  })

  const updateMutation = useMutation({
    mutationFn: api.updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
    },
  })

  const deleteMutation = useMutation({
    mutationFn: api.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
    },
  })

  const handleAdd = (newPost) => {
    addMutation.mutate(newPost)
  }

  const handleEdit = (editedPost) => {
    updateMutation.mutate(editedPost)
  }

  const handleDelete = (id) => {
    deleteMutation.mutate(id)
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="flex flex-col h-full">
      {/* <PageHeader /> */}
      <div className="p-6 flex-1 bg-gray-100">
        <DataList title="Posts" data={posts} columns={columns} onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  )
}


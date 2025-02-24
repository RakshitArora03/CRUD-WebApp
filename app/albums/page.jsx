"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import DataList from "../components/DataList"
import PageHeader from "../components/PageHeader"
import api from "../services/api"

const columns = [
  { key: "title", header: "Title" },
  { key: "userId", header: "User ID" },
]

export default function AlbumsPage() {
  const queryClient = useQueryClient()

  const { data: albums, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: api.fetchAlbums,
  })

  const addMutation = useMutation({
    mutationFn: api.addAlbum,
    onSuccess: () => {
      queryClient.invalidateQueries(["albums"])
    },
  })

  const updateMutation = useMutation({
    mutationFn: api.updateAlbum,
    onSuccess: () => {
      queryClient.invalidateQueries(["albums"])
    },
  })

  const deleteMutation = useMutation({
    mutationFn: api.deleteAlbum,
    onSuccess: () => {
      queryClient.invalidateQueries(["albums"])
    },
  })

  const handleAdd = (newAlbum) => {
    addMutation.mutate(newAlbum)
  }

  const handleEdit = (editedAlbum) => {
    updateMutation.mutate(editedAlbum)
  }

  const handleDelete = (id) => {
    deleteMutation.mutate(id)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="flex flex-col h-full">
      <PageHeader />
      <div className="p-6 flex-1 bg-gray-100">
        <DataList title="Albums" data={albums} columns={columns} onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  )
}


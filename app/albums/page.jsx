"use client"

import { useQuery } from "@tanstack/react-query"
import DataList from "../components/DataList"
import PageHeader from "../components/PageHeader"
// import { Button } from "@/components/ui/button"

const columns = [
  { key: "title", header: "Title" },
  { key: "userId", header: "User ID" },
]

export default function AlbumsPage() {
  const { data: albums, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums")
      if (!res.ok) {
        throw new Error("Network response was not ok")
      }
      return res.json()
    },
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="flex flex-col h-full">
      <PageHeader />
      <div className="p-6 flex-1 bg-gray-100">
        <div className="flex items-center justify-between mb-6">
          <button variant="default" className="inline-block cursor-pointer rounded-md px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out bg-[#584099] hover:bg-[#6b4eb9]">
            Add new
          </button>
          <button variant="outline">Filter</button>
        </div>
        <DataList
          data={albums}
          columns={columns}
          onRead={(album) => console.log("Read", album)}
          onEdit={(album) => console.log("Edit", album)}
          onDelete={(album) => console.log("Delete", album)}
        />
      </div>
    </div>
  )
}


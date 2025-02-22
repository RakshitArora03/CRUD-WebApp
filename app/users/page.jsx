"use client"

import { useQuery } from "@tanstack/react-query"
import DataList from "../components/DataList"
import PageHeader from "../components/PageHeader"
// import { Button } from "@/components/ui/button"

const columns = [
  { key: "photo", header: "Photo" },
  { key: "name", header: "Name" },
  { key: "phone", header: "Mobile" },
  { key: "email", header: "Mail ID" },
]

export default function UsersPage() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
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
          data={users}
          columns={columns}
          onRead={(user) => console.log("Read", user)}
          onEdit={(user) => console.log("Edit", user)}
          onDelete={(user) => console.log("Delete", user)}
        />
      </div>
    </div>
  )
}


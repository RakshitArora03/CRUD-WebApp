import { Search } from "lucide-react"

export default function PageHeader() {
  return (
    <div className="bg-[#584099] text-white p-4 flex items-center justify-between pt-14">
      <div className="flex-1 max-w-xl w-full px-4 lg:px-0">
        <div className="relative">
          {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="search"
            placeholder="Search..."
            className="input input-bordered w-full pl-10 bg-white text-black"
          /> */}
        </div>
      </div>
    </div>
  )
}


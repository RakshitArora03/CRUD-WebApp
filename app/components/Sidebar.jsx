import Link from "next/link"
import { Home, Users, MessageSquare, FileText, Image } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="bg-[#584099] w-64 h-full text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>
      <nav className="mt-6">
        <Link href="/" className="block py-3 px-4 hover:bg-[#6b4eb9] transition-colors">
          <Home className="inline-block mr-2" size={20} />
          Home
        </Link>
        <Link href="/users" className="block py-3 px-4 hover:bg-[#6b4eb9] transition-colors">
          <Users className="inline-block mr-2" size={20} />
          Users
        </Link>
        <Link href="/posts" className="block py-3 px-4 hover:bg-[#6b4eb9] transition-colors">
          <FileText className="inline-block mr-2" size={20} />
          Posts
        </Link>
        <Link href="/comments" className="block py-3 px-4 hover:bg-[#6b4eb9] transition-colors">
          <MessageSquare className="inline-block mr-2" size={20} />
          Comments
        </Link>
        <Link href="/albums" className="block py-3 px-4 hover:bg-[#6b4eb9] transition-colors">
          <Image className="inline-block mr-2" size={20} />
          Albums
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar


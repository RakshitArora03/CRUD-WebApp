"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Users, MessageSquare, FileText, Image, Menu, X } from "lucide-react"

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/users", icon: Users, label: "Users" },
    { href: "/posts", icon: FileText, label: "Posts" },
    { href: "/comments", icon: MessageSquare, label: "Comments" },
    { href: "/albums", icon: Image, label: "Albums" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 btn btn-circle btn-ghost"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
        bg-[#584099] text-white
        fixed lg:static
        inset-y-0 left-0
        w-64 h-full
        transform transition-transform duration-200 ease-in-out
        lg:transform-none
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        z-40
      `}
      >
        <div className="p-6">
          {/* <h1 className="text-2xl font-bold">LOGO</h1> */}
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-3 px-4 hover:bg-[#6b4eb9] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="inline-block mr-2" size={30} />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar


"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import { useState } from "react"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
              <main className="flex-1 overflow-y-auto mt-20 bg-gray-100">{children}</main>
            </div>
          </div>
          <Toaster
            position="top center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#333",
                color: "#fff",
              },
              success: {
                style: {
                  background: "#28a745",
                },
              },
              error: {
                style: {
                  background: "#dc3545",
                },
              },
            }}
          />
        </QueryClientProvider>
      </body>
    </html>
  )
}


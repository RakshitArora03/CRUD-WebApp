"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Sidebar from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col w-full lg:w-[calc(100%-16rem)]">{children}</div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  )
}


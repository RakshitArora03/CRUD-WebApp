import PageHeader from "./components/PageHeader"

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <PageHeader />
      <div className="p-6 flex-1 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#584099] text-white rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to CRUD Dashboard</h1>
            <p className="text-lg opacity-90">Manage your data with our simple and intuitive interface</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-4">This is a CRUD (Create, Read, Update, Delete) application built with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Next.js for the framework</li>
              <li>TailwindCSS and DaisyUI for styling</li>
              <li>JSONPlaceholder API for data management</li>
              <li>React Query for data fetching</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Available Resources:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Users:</strong> Manage user data and profiles
              </li>
              <li>
                <strong>Posts:</strong> Create and manage blog posts
              </li>
              <li>
                <strong>Comments:</strong> View and moderate comments
              </li>
              <li>
                <strong>Albums:</strong> Organize and manage photo albums
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


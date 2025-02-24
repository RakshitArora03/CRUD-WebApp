export default function ReadModal({ isOpen, onClose, item, columns }) {
    if (!isOpen || !item) return null
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">View Details</h2>
          <div className="space-y-4">
            {columns.map((column) => (
              <div key={column.key}>
                <span className="font-bold">{column.header}: </span>
                {column.key === "photo" ? (
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.id}`} alt="Avatar" />
                    </div>
                  </div>
                ) : (
                  <span>{item[column.key]}</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <button onClick={onClose} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  
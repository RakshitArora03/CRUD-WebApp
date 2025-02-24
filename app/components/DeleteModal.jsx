export default function DeleteModal({ isOpen, onClose, onDelete }) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
          <p className="mb-6">Are you sure you want to delete this item? This action cannot be undone.</p>
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="btn btn-ghost">
              Cancel
            </button>
            <button onClick={onDelete} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  
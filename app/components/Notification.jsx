export default function Notification({ message, type, onClose }) {
    if (!message) return null
  
    const alertClass = type === "success" ? "alert-success" : "alert-error"
  
    return (
      <div className={`alert ${alertClass} fixed bottom-4 right-4 w-auto max-w-sm z-50`}>
        <span>{message}</span>
        <button onClick={onClose} className="btn btn-sm btn-ghost">
          ×
        </button>
      </div>
    )
  }
  
  
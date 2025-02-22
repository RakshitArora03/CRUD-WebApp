const DataList = ({ data, columns, onRead, onEdit, onDelete }) => {
  if (!data || data.length === 0) {
    return <div className="text-center p-4">No data available</div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th className="w-16">ID</th>
            {columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
            <th className="w-48">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.key === "photo" ? (
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.id}`} alt="Avatar" />
                      </div>
                    </div>
                  ) : (
                    item[column.key]
                  )}
                </td>
              ))}
              <td>
                <div className="flex gap-2">
                  <button className="btn btn-xs btn-info" onClick={() => onRead(item)}>
                    Read
                  </button>
                  <button className="btn btn-xs btn-warning" onClick={() => onEdit(item)}>
                    Edit
                  </button>
                  <button className="btn btn-xs btn-error" onClick={() => onDelete(item.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataList


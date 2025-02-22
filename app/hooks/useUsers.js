import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "https://jsonplaceholder.typicode.com/users"

export const useUsers = () => {
  const queryClient = useQueryClient()

  const fetchUsers = async () => {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error("Failed to fetch users")
    }
    return response.json()
  }

  const createUser = async (user) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    if (!response.ok) {
      throw new Error("Failed to create user")
    }
    return response.json()
  }

  const updateUser = async (user) => {
    const response = await fetch(`${API_URL}/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    if (!response.ok) {
      throw new Error("Failed to update user")
    }
    return response.json()
  }

  const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
    if (!response.ok) {
      throw new Error("Failed to delete user")
    }
  }

  const { data: users, isLoading, isError } = useQuery(["users"], fetchUsers)

  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    },
  })

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    },
  })

  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    },
  })

  return {
    users,
    isLoading,
    isError,
    createUser: createUserMutation.mutate,
    updateUser: updateUserMutation.mutate,
    deleteUser: deleteUserMutation.mutate,
  }
}


// This is a mock API service to simulate backend operations

let users = []
let posts = []
let comments = []
let albums = []

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const api = {
  fetchUsers: async () => {
    if (users.length === 0) {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      users = await response.json()
    }
    return users
  },
  addUser: async (user) => {
    await delay(500) // Simulate network delay
    const newUser = { ...user, id: Math.max(0, ...users.map((u) => u.id)) + 1 }
    users.push(newUser)
    return newUser
  },
  updateUser: async (user) => {
    await delay(500)
    const index = users.findIndex((u) => u.id === user.id)
    if (index !== -1) {
      users[index] = user
      return user
    }
    throw new Error("User not found")
  },
  deleteUser: async (id) => {
    await delay(500)
    const index = users.findIndex((u) => u.id === id)
    if (index !== -1) {
      users.splice(index, 1)
      return id
    }
    throw new Error("User not found")
  },

  fetchPosts: async () => {
    if (posts.length === 0) {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      posts = await response.json()
    }
    return posts
  },
  addPost: async (post) => {
    await delay(500)
    const newPost = { ...post, id: Math.max(0, ...posts.map((p) => p.id)) + 1 }
    posts.push(newPost)
    return newPost
  },
  updatePost: async (post) => {
    await delay(500)
    const index = posts.findIndex((p) => p.id === post.id)
    if (index !== -1) {
      posts[index] = post
      return post
    }
    throw new Error("Post not found")
  },
  deletePost: async (id) => {
    await delay(500)
    const index = posts.findIndex((p) => p.id === id)
    if (index !== -1) {
      posts.splice(index, 1)
      return id
    }
    throw new Error("Post not found")
  },

  fetchComments: async () => {
    if (comments.length === 0) {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments")
      comments = await response.json()
    }
    return comments
  },
  addComment: async (comment) => {
    await delay(500)
    const newComment = { ...comment, id: Math.max(0, ...comments.map((c) => c.id)) + 1 }
    comments.push(newComment)
    return newComment
  },
  updateComment: async (comment) => {
    await delay(500)
    const index = comments.findIndex((c) => c.id === comment.id)
    if (index !== -1) {
      comments[index] = comment
      return comment
    }
    throw new Error("Comment not found")
  },
  deleteComment: async (id) => {
    await delay(500)
    const index = comments.findIndex((c) => c.id === id)
    if (index !== -1) {
      comments.splice(index, 1)
      return id
    }
    throw new Error("Comment not found")
  },

  fetchAlbums: async () => {
    if (albums.length === 0) {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums")
      albums = await response.json()
    }
    return albums
  },
  addAlbum: async (album) => {
    await delay(500)
    const newAlbum = { ...album, id: Math.max(0, ...albums.map((a) => a.id)) + 1 }
    albums.push(newAlbum)
    return newAlbum
  },
  updateAlbum: async (album) => {
    await delay(500)
    const index = albums.findIndex((a) => a.id === album.id)
    if (index !== -1) {
      albums[index] = album
      return album
    }
    throw new Error("Album not found")
  },
  deleteAlbum: async (id) => {
    await delay(500)
    const index = albums.findIndex((a) => a.id === id)
    if (index !== -1) {
      albums.splice(index, 1)
      return id
    }
    throw new Error("Album not found")
  },
}

export default api


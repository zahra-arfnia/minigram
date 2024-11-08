import { create } from "zustand"
// shouldnt managing posts all be in one state???

const useDelete = create((set, get) => ({
  deletedPosts: [],
  actions: {
    deletePost: () => {
      get
    },
  },
}))

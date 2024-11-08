import { create } from "zustand"

const useSignIn = create((set, get) => ({
  isSignedIn: false,
  actions: {
    signIn: () => {
      set((state) => ({ ...state, isSignedIn: true }))
    },
    signOut: () => {
      set((state) => ({ ...state, isSignedIn: false }))
    },
  },
}))

export default useSignIn

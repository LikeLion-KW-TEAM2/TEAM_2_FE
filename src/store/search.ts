import { create } from 'zustand'

interface Actions {
  setSearch: (newSearch: string) => void
  resetField: () => void
}

interface SearchStore {
  search: string
  actions: Actions
}

export const useSearchStore = create<SearchStore>((set) => ({
  search: '',
  actions: {
    setSearch: (newSearch: string) => set(() => ({ search: newSearch })),
    resetField: () => set(() => ({ search: '' })),
  },
}))

export const useSearch = () => useSearchStore((state) => state.search)
export const useSearchActions = () => useSearchStore((state) => state.actions)

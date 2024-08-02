const queryKeys = {
  all: ['friend'] as const,
  search: (id: string) => [...queryKeys.all, 'search', id] as const,
  icecream: (id: string) => [...queryKeys.all, 'icecream', id] as const,
}

export default queryKeys

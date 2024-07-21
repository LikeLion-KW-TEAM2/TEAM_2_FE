const queryKeys = {
  all: ['friend'] as const,
  search: () => [...queryKeys.all, 'search'] as const,
  icecream: (id: string) => [...queryKeys.all, 'icecream', id] as const,
}

export default queryKeys

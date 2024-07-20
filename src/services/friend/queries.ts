const queryKeys = {
  all: ['friend'] as const,
  search: () => [...queryKeys.all, 'search'] as const,
}

export default queryKeys

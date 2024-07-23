const queryKeys = {
  all: ['record'] as const,
  edit: (habitId: number) => [...queryKeys.all, 'edit', habitId] as const,
}

export default queryKeys

const queryKeys = {
  all: ['record'] as const,
  edit: (habitId: number) => [...queryKeys.all, 'edit', habitId] as const,
  habit: (date: string) => [...queryKeys.all, 'habit', date] as const,
}

export default queryKeys

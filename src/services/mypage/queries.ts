const queryKeys = {
  all: ['mypage'] as const,
  friendList: () => [...queryKeys.all, 'friend-list'] as const,
  accountInfo: () => [...queryKeys.all, 'account-info'] as const,
  completeHabit: () => [...queryKeys.all, 'complete-habit'] as const,
}

export default queryKeys

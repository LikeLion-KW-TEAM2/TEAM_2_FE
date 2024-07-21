const queryKeys = {
  all: ['mypage'] as const,
  friendList: () => [...queryKeys.all, 'friend-list'] as const,
  accountInfo: () => [...queryKeys.all, 'account-info'] as const,
}

export default queryKeys

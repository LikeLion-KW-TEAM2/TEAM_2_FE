const queryKeys = {
  all: ['mypage'] as const,
  friendList: () => [...queryKeys.all, 'friend-list'] as const,
}

export default queryKeys

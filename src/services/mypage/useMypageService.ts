import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import queryKeys from './queries'
import mypageService from './mypageService'
import { FriendListResponse } from '@/types/mypage'

export function useMypage() {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => mypageService.GET.mypage(),
  })
}

export function useFriendList() {
  return useQuery({
    queryKey: queryKeys.friendList(),
    queryFn: () => mypageService.GET.friendList(),
  })
}

export function useDeleteFriend() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => mypageService.DELETE.friend(id),
    onSuccess(_, variables) {
      queryClient.setQueryData<FriendListResponse>(
        queryKeys.friendList(),
        (oldData): FriendListResponse => {
          if (!oldData) return { list: [] }

          return {
            ...oldData,
            list: oldData.list.filter((friend) => friend.userId !== variables),
          }
        },
      )
    },
  })
}

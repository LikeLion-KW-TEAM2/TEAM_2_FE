import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import queryKeys from './queries'
import friendService from './friendService'
import { GuestbookRequest } from '@/types/friend'
import { AddFriendRequest } from '@/types/record'

export const useFriendPageList = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => friendService.GET.friend(),
  })
}

export const useSearchList = (id: string) => {
  return useQuery({
    queryKey: queryKeys.search(id),
    queryFn: () => friendService.GET.search(id),
  })
}

export const useAddition = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (friend: AddFriendRequest) => friendService.POST.add(friend),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
    },
    onError: (error: any) => {
      console.error('error', error)
    },
  })
}

export const useFriendIcecream = (id: string) => {
  return useQuery({
    queryKey: queryKeys.icecream(id),
    queryFn: () => friendService.GET.icecream(id),
  })
}

export const useGuestBook = () => {
  return useMutation({
    mutationFn: (message: GuestbookRequest) =>
      friendService.POST.guestbook(message),
    onError: (error: any) => {
      console.error('error', error)
    },
  })
}

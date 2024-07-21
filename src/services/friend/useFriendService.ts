import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import queryKeys from './queries'
import friendService from './friendService'
import { GuestbookRequest } from '@/types/friend'

export const useFriendPageList = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => friendService.GET.friend(),
  })
}

export const useSearchList = (id: string) => {
  return useQuery({
    queryKey: queryKeys.search(),
    queryFn: () => friendService.GET.search(id),
  })
}

export const useAddition = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (searchId: string) => friendService.POST.add(searchId),
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

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import queryKeys from './queries'
import guestbookService from './guestbookService'
import { GuestbookResponse } from '@/types/guestbook'

export const useGuestBookList = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => guestbookService.GET.guestbook(),
  })
}

export const useDeleteContent = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => guestbookService.DELETE.content(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
    },
  })
}

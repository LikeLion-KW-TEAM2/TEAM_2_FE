import { useQuery } from '@tanstack/react-query'
import queryKeys from './queries'
import guestbookService from './guestbookService'

export const useGuestBookList = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => guestbookService.GET.guestbook(),
  })
}

import { useQuery } from '@tanstack/react-query'
import queryKeys from './queries'
import friendService from './friendService'

export function useFriendPageList() {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => friendService.GET.friend(),
  })
}

export function useSearchList(id: string) {
  return useQuery({
    queryKey: queryKeys.search(),
    queryFn: () => friendService.GET.search(id),
  })
}

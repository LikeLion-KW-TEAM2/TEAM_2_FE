import { useQuery } from '@tanstack/react-query'
import queryKeys from './queries'
import mypageService from './mypageService'

export function useMypage() {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => mypageService.GET.mypage(),
  })
}

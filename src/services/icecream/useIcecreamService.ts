import { useQuery } from '@tanstack/react-query'
import queryKeys from './queries'
import icecreamService from './icecreamService'

export const useIcecreamLevel = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => icecreamService.GET.icecream(),
  })
}

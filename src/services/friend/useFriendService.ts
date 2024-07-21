import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import queryKeys from './queries'
import friendService from './friendService'

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

import { useMutation, useQuery } from '@tanstack/react-query'
import recordService from './recordService'
import queryKeys from './queries'

export const useRecord = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => recordService.GET.record(),
  })
}

export const useEditPage = (habitId: number) => {
  return useQuery({
    queryKey: queryKeys.edit(habitId),
    queryFn: () => recordService.GET.editPage(habitId),
  })
}

export const useCheckHabit = () => {
  return useMutation({
    mutationFn: (habitId: number) => recordService.PUT.check(habitId),
  })
}

export const useDeleteHabit = () => {
  return useMutation({
    mutationFn: (habitId: number) => recordService.DELETE.deleteHabit(habitId),
  })
}

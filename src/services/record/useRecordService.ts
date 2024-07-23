import { useMutation, useQuery } from '@tanstack/react-query'
import recordService from './recordService'
import queryKeys from './queries'
import { EditForm, EditRequest } from '@/types/record'

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

export const useEditHabit = () => {
  return useMutation({
    mutationFn: ({ habitId, formData }: EditRequest) =>
      recordService.PUT.edit(habitId, formData),
  })
}

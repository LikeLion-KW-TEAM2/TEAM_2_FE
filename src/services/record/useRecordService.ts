import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import recordService from './recordService'
import queryKeys from './queries'
import { AddHabitRequest, CheckHabitRequest, EditRequest } from '@/types/record'

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
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (checkData: CheckHabitRequest) =>
      recordService.PUT.check(checkData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.habit(variables.date),
      })
    },
  })
}

export const useDeleteHabit = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (habitId: number) => recordService.DELETE.deleteHabit(habitId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
    },
  })
}

export const useEditHabit = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ habitId, formData }: EditRequest) =>
      recordService.PUT.edit(habitId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
    },
  })
}

export const useAddHabit = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (habit: AddHabitRequest) => recordService.POST.habit(habit),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.all }),
  })
}

export const useHabitsByDate = (date: string) => {
  return useQuery({
    queryKey: queryKeys.habit(date),
    queryFn: () => recordService.GET.habitByDate(date),
    enabled: false,
  })
}

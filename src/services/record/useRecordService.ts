import { useMutation } from '@tanstack/react-query'
import recordService from './recordService'

export const useCheckHabit = () => {
  return useMutation({
    mutationFn: (habitId: number) => recordService.PUT.check(habitId),
  })
}

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import queryKeys from './queries'
import mypageService from './mypageService'
import { AccountInfoRequest, FriendListResponse } from '@/types/mypage'
import { instance } from '../service'
import { useNavigate } from 'react-router-dom'

export const useMypage = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => mypageService.GET.mypage(),
  })
}

export const useFriendList = () => {
  return useQuery({
    queryKey: queryKeys.friendList(),
    queryFn: () => mypageService.GET.friendList(),
  })
}

export const useDeleteFriend = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => mypageService.DELETE.friend(id),
    onSuccess(_, variables) {
      queryClient.setQueryData<FriendListResponse>(
        queryKeys.friendList(),
        (oldData): FriendListResponse => {
          if (!oldData) return []
          return [...oldData.filter((friend) => friend.userId !== variables)]
        },
      )
    },
  })
}

export const useAccountInfo = () => {
  return useQuery({
    queryKey: queryKeys.accountInfo(),
    queryFn: () => mypageService.GET.accountInfo(),
  })
}

export const useCompleteHabits = () => {
  return useQuery({
    queryKey: queryKeys.completeHabit(),
    queryFn: () => mypageService.GET.completeHabit(),
  })
}

export const useEditPassword = () => {
  return useMutation({
    mutationFn: (password: string) => mypageService.POST.editPassword(password),
  })
}

export const useRemove = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: () => mypageService.DELETE.remove(),
    onSuccess: () => {
      delete instance.defaults.headers.common['Authorization']
      navigate('/login')
    },
  })
}

export const useUploadImage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (sendForm: FormData) =>
      mypageService.POST.uploadImage(sendForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.accountInfo() })
    },
  })
}

export const useUploadDefaultImage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (formData: AccountInfoRequest) =>
      mypageService.POST.uploadDefaultImage(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.accountInfo() })
    },
  })
}

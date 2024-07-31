import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import queryKeys from './queries'
import mypageService from './mypageService'
import {
  AccountInfoRequest,
  AccountInfoResponse,
  FriendListResponse,
} from '@/types/mypage'
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

export const useEditAccountInfo = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (accountInfo: AccountInfoRequest) =>
      mypageService.POST.editAccount(accountInfo),
    onSuccess(_, variables) {
      queryClient.setQueryData<AccountInfoResponse>(
        queryKeys.accountInfo(),
        (oldData): AccountInfoResponse => {
          if (!oldData) return { ...variables }
          return {
            ...oldData,
            ...variables,
          }
        },
      )
    },
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
  return useMutation({
    mutationFn: (image: FormData) => mypageService.POST.uploadImage(image),
  })
}

export const useUploadDefaultImage = () => {
  return useMutation({
    mutationFn: () => mypageService.POST.uploadDefaultImage(),
  })
}

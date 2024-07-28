import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { Dispatch, SetStateAction } from 'react'
import { UseFormSetValue } from 'react-hook-form'

export interface ISelectedForm {
  setValue: UseFormSetValue<IEditForm>
  privacy?: number
  periodType?: number
}

export interface IHabitCalendar {
  selectedDate: string
  setSelectedDate: Dispatch<SetStateAction<string>>
}

interface IRecord {
  id: number
  name: string
  status: number
  createdAt: string
  selectedDate: string
}

export interface IEditForm {
  name: string
  periodType: number
  privacy: number
}

export interface IHabits {
  id: number
  name: string
  status: number
  createdAt: string
}

export type IHabitItem = IRecord & {
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<HabitsByDateResponse, Error>>
}

export interface IHabitList {
  list: IHabits[]
  habitsData?: IHabits[]
  selectedDate: string
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<HabitsByDateResponse, Error>>
}

export type IAddForm = IEditForm

export interface EditRequest {
  habitId: number
  formData: IEditForm
}

export type AddHabitRequest = IEditForm

export interface CheckHabitRequest {
  habitId: number
  date: string
}

export interface AddFriendRequest {
  userId: string
  name: string
}

export interface RecordResponse {
  mylmage: string
  habits: IRecord[]
}

export interface EditPageResponse {
  id: number
  name: string
  periodType: number
  privacy: number
  dday: number
}

export interface HabitsByDateResponse {
  myImage: string
  habits: IHabits[]
}

export type EditFormType = EditPageResponse & {
  openOvercomModal: () => void
  openSuccessModal: () => void
}

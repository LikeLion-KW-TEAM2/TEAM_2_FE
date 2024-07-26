export interface Record {
  id: number
  name: string
  status: number
  createdAt: string
  selectedDate: string
}

export interface RecordResponse {
  mylmage: string
  habits: Record[]
}

export interface EditPageResponse {
  id: number
  name: string
  periodType: number
  privacy: number
  dday: number
}

export interface EditForm {
  name: string
  periodType: number
  privacy: number
}

export interface EditRequest {
  habitId: number
  formData: EditForm
}

export type AddForm = EditForm
export type AddHabitRequest = EditForm

export interface Habits {
  id: number
  name: string
  status: number
  createdAt: string
}

export interface HabitsByDateResponse {
  myImage: string
  habits: Habits[]
}

export interface CheckHabitRequest {
  habitId: number
  date: string
}

export interface AddFriendRequest {
  userId: string
  name: string
}

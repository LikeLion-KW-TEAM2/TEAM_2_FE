export interface Record {
  id: number
  name: string
  status: number
  createdAt: string
}

export interface RecordResponse {
  mylmage: string
  list: Record[]
}

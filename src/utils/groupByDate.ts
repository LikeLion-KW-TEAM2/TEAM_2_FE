import { GuestbookContent } from '@/types/guestbook'

const groupByDate = (guestbooks: GuestbookContent[]) => {
  const grouped = guestbooks.reduce(
    (acc, guestbook) => {
      const date = guestbook.createdAt
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(guestbook)
      return acc
    },
    {} as { [date: string]: GuestbookContent[] },
  )

  return Object.entries(grouped).map(([date, items]) => ({
    date,
    items,
  }))
}

export default groupByDate

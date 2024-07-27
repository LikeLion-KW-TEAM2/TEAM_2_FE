import { IGuestbookContent } from '@/types/guestbook'

const groupByDate = (guestbooks: IGuestbookContent[]) => {
  const grouped = guestbooks.reduce(
    (acc, guestbook) => {
      const date = guestbook.createdAt
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(guestbook)
      return acc
    },
    {} as { [date: string]: IGuestbookContent[] },
  )

  return Object.entries(grouped).map(([date, items]) => ({
    date,
    items,
  }))
}

export default groupByDate

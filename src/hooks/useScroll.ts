import dayjs from 'dayjs'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

const useScroll = (setSelectedDate: Dispatch<SetStateAction<string>>) => {
  const isDragging = useRef(false)
  const todayRef = useRef<HTMLDivElement>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const [isDragMoved, setIsDragMoved] = useState(false)

  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      isDragging.current = true
      startX.current = e.pageX - containerRef.current.offsetLeft
      scrollLeft.current = containerRef.current.scrollLeft
      setIsDragMoved(false)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    setIsDragMoved(true)
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft
      const walk = x - startX.current
      containerRef.current.scrollLeft = scrollLeft.current - walk
    }
  }

  const handleMouseUpOrLeave = () => {
    isDragging.current = false
  }

  const handleDateClick = (date: string) => {
    if (!isDragMoved) {
      const formattedDate = dayjs(date).format('YYYY-MM-DD')
      setSelectedDate(formattedDate)
    }
  }

  return {
    todayRef,
    containerRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUpOrLeave,
    handleDateClick,
  }
}

export default useScroll

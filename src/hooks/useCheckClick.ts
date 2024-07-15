import { useEffect, useState } from 'react'

const useCheckClick = () => {
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [isChecked, setIsChecked] = useState([false, false, false])

  const handleCheckClick = (index: number) => {
    setIsChecked((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked)),
    )
  }
  const handleAllCheckClick = () => {
    if (isAllChecked) setIsChecked([false, false, false])
    else setIsChecked([true, true, true])
  }

  useEffect(() => {
    if (isChecked.includes(false)) setIsAllChecked(false)
    if (isChecked.every((checked) => checked)) setIsAllChecked(true)
  }, [isChecked])

  return {
    isChecked,
    isAllChecked,
    handleCheckClick,
    handleAllCheckClick,
  }
}

export default useCheckClick

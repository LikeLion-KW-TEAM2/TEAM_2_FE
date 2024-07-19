import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

const useCheckClick = () => {
  const { setValue } = useFormContext()
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [isChecked, setIsChecked] = useState([false, false, false])
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

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

  useEffect(() => {
    setValue('agree', isChecked[2] ? 1 : 0)
  }, [isChecked[2]])

  useEffect(() => {
    if (isChecked[0] && isChecked[1]) setIsButtonDisabled(false)
    else setIsButtonDisabled(true)
  }, [isChecked])

  return {
    isChecked,
    isAllChecked,
    isButtonDisabled,
    handleCheckClick,
    handleAllCheckClick,
  }
}

export default useCheckClick

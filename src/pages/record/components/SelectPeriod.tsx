import { DropDown } from '@/components/DropDown'
import { InputField } from '@/components/InputField'
import { PERIOD_TYPE } from '@/constants'
import { useToggle } from '@/hooks/useToggle'
import { ISelectedForm } from '@/types/record'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const SelectPeriod = ({ setValue, periodType }: ISelectedForm) => {
  const [isDateDropDownOpen, handleDateDropDownOpen] = useToggle()
  const [selectedName, setSelectedName] = useState(PERIOD_TYPE[periodType || 0])

  const handlePeriodChange = (periodType: string) => {
    setValue('periodType', PERIOD_TYPE.indexOf(periodType))
    setSelectedName(periodType)
    handleDateDropDownOpen()
  }

  return (
    <InputField>
      <div className="flexBetweenAlign text-secondary-700">
        <InputField.Label>반복 날짜</InputField.Label>
        <div className="relative">
          <div
            className="flexAlign cursor-pointer gap-1"
            onClick={handleDateDropDownOpen}
          >
            <p className="text-large">{selectedName}</p>
            {isDateDropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {isDateDropDownOpen && (
            <DropDown>
              {PERIOD_TYPE.map((date) => (
                <DropDown.Item
                  key={date}
                  onClick={() => handlePeriodChange(date)}
                >
                  {date}
                </DropDown.Item>
              ))}
            </DropDown>
          )}
        </div>
      </div>
    </InputField>
  )
}

export default SelectPeriod

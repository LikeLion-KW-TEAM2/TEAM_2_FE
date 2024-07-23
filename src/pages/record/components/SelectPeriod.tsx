import { DropDown } from '@/components/DropDown'
import { InputField } from '@/components/InputField'
import { useToggle } from '@/hooks/useToggle'
import { EditPageRequest } from '@/types/record'
import { useFormContext } from 'react-hook-form'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const SelectPeriod = () => {
  const [isDateDropDownOpen, handleDateDropDownOpen] = useToggle()
  const { setValue } = useFormContext<EditPageRequest>()

  const handlePeriodChange = (periodType: number) => {
    setValue('periodType', periodType)
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
            <p className="text-large">매일</p>
            {isDateDropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {isDateDropDownOpen && (
            <DropDown>
              <DropDown.Item onClick={() => handlePeriodChange(7)}>
                매일
              </DropDown.Item>
              <DropDown.Item onClick={() => handlePeriodChange(5)}>
                주중
              </DropDown.Item>
              <DropDown.Item onClick={() => handlePeriodChange(2)}>
                주말
              </DropDown.Item>
            </DropDown>
          )}
        </div>
      </div>
    </InputField>
  )
}

export default SelectPeriod

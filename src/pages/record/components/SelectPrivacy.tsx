import { DropDown } from '@/components/DropDown'
import { InputField } from '@/components/InputField'
import { useToggle } from '@/hooks/useToggle'
import { EditPageRequest } from '@/types/record'
import { useFormContext } from 'react-hook-form'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const SelectPrivacy = () => {
  const [isPrivateDropDownOpen, handlePrivateDropDownOpen] = useToggle()
  const { setValue } = useFormContext<EditPageRequest>()

  const handlePrivateChange = (privacy: number) => {
    setValue('privacy', privacy)
    handlePrivateDropDownOpen()
  }

  return (
    <InputField>
      <div className="flexBetweenAlign text-secondary-700">
        <InputField.Label>공개 여부</InputField.Label>
        <div className="relative">
          <div
            className="flexAlign cursor-pointer gap-1"
            onClick={handlePrivateDropDownOpen}
          >
            <p className="text-large">모두 보기</p>
            {isPrivateDropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {isPrivateDropDownOpen && (
            <DropDown>
              <DropDown.Item onClick={() => handlePrivateChange(0)}>
                모두 보기
              </DropDown.Item>
              <DropDown.Item onClick={() => handlePrivateChange(1)}>
                나만 보기
              </DropDown.Item>
            </DropDown>
          )}
        </div>
      </div>
    </InputField>
  )
}

export default SelectPrivacy

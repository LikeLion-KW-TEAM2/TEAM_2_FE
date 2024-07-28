import { DropDown } from '@/components/DropDown'
import { InputField } from '@/components/InputField'
import { PRIVACY_ARR } from '@/constants'
import { useToggle } from '@/hooks/useToggle'
import { ISelectedForm } from '@/types/record'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const SelectPrivacy = ({ setValue, privacy }: ISelectedForm) => {
  const [isPrivateDropDownOpen, handlePrivateDropDownOpen] = useToggle()
  const [selectedPrivacy, setSelectedPrivacy] = useState(
    PRIVACY_ARR[privacy || 0],
  )

  const handlePrivateChange = (privacy: string) => {
    setValue('privacy', PRIVACY_ARR.indexOf(privacy))
    setSelectedPrivacy(privacy)
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
            <p className="text-large">{selectedPrivacy}</p>
            {isPrivateDropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {isPrivateDropDownOpen && (
            <DropDown>
              {PRIVACY_ARR.map((privacy) => (
                <DropDown.Item
                  key={privacy}
                  onClick={() => handlePrivateChange(privacy)}
                >
                  {privacy}
                </DropDown.Item>
              ))}
            </DropDown>
          )}
        </div>
      </div>
    </InputField>
  )
}

export default SelectPrivacy

import Button from '@/components/Button'
import { DropDown } from '@/components/DropDown'
import { InputField } from '@/components/InputField'
import SubHeader from '@/components/SubHeader'
import { useModal } from '@/hooks/useModal'
import { useToggle } from '@/hooks/useToggle'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import ModalCompleteHabit from './components/ModalCompleteHabit'
import { useEditPage } from '@/services/record/useRecordService'
import { useParams } from 'react-router-dom'

const RecordEdit = () => {
  const [isDateDropDownOpen, handleDateDropDownOpen] = useToggle()
  const [isPrivateDropDownOpen, handlePrivateDropDownOpen] = useToggle()
  const { isOpen, openModal, closeModal } = useModal()
  const { id: habitId } = useParams()
  const { data: editPage, status } = useEditPage(parseInt(habitId as string))

  if (status === 'pending') return null
  if (status === 'error') return null

  const { id, dDay, name, periodType, privacy } = editPage

  return (
    <div>
      <SubHeader>수정하기</SubHeader>
      <div className="flexColumn gap-[40px]">
        <InputField>
          <InputField.Label>NOT-TO-DO</InputField.Label>
          <InputField.Input type="text" />
        </InputField>

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
                  <DropDown.Item>매일</DropDown.Item>
                  <DropDown.Item>주중</DropDown.Item>
                  <DropDown.Item>주말</DropDown.Item>
                </DropDown>
              )}
            </div>
          </div>
        </InputField>

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
                  <DropDown.Item>모두 보기</DropDown.Item>
                  <DropDown.Item>나만 보기</DropDown.Item>
                </DropDown>
              )}
            </div>
          </div>
        </InputField>
      </div>

      <div className="flexColumn absolute bottom-10 left-4 right-4 gap-4">
        <Button width="w-full" size="medium">
          완료
        </Button>
        <Button width="w-full" size="medium" handleClick={openModal}>
          습관 극복 완료
        </Button>
      </div>

      <ModalCompleteHabit isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default RecordEdit

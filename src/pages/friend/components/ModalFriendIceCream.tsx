import { Modal } from '@/components/modal/Modal'
import {
  useFriendIcecream,
  useGuestBook,
} from '@/services/friend/useFriendService'
import { ModalType } from '@/types/common'
import convertLevelToIcecream from '@/utils/convertLevelToIcecream'
import { BsSend } from 'react-icons/bs'
import bgIcecream from '@/assets/images/icecream-bg.svg'
import useInput from '@/hooks/useInput'

type ModalIcecream = ModalType & { userId: string }

const ModalFriendIceCream = ({ isOpen, closeModal, userId }: ModalIcecream) => {
  const { data: modalData, status } = useFriendIcecream(userId)
  const { input, onChange, reset } = useInput({ content: '' })
  const { mutate: sendMessage } = useGuestBook()
  const handleClickSendMessage = () => {
    sendMessage(
      { userId, content: input.content },
      {
        onSuccess: () => reset(),
      },
    )
  }

  if (status === 'pending') return null
  if (status === 'error') return null

  const { name, countList, level } = modalData

  return (
    <Modal closeBtn isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-3 text-center font-bold">{name}님의 아이스크림</h4>

      <div className="relative mb-3 h-[280px]">
        <img src={bgIcecream} className="mx-auto h-full" alt="ice-cream" />
        <img
          src={convertLevelToIcecream(level)}
          className="absolute bottom-8 left-1/2 w-[86px] -translate-x-1/2"
          alt="ice-cream"
        />
      </div>
      <p className="mb-1 text-small font-medium">습관 목록</p>
      <ul className="grid list-disc grid-cols-2 items-center text-xsmall">
        {countList.map((item) => (
          <li key={item} className="ml-4">
            {item}
          </li>
        ))}
      </ul>

      <div className="mb-2 mt-5 text-xsmall text-primary-600">
        <p>응원의 한마디를 남겨주세요!</p>
        <p>친구분의 방명록에 기록됩니다.</p>
      </div>
      <div className="flexAlign rounded-2xl bg-secondary-100 px-3 py-2">
        <input
          name="content"
          value={input.content}
          onChange={onChange}
          className="flex-1 bg-transparent text-xsmall text-secondary-900 placeholder:text-secondary-500 focus:outline-none"
          placeholder="응원의 한마디를 보내주세요."
        />
        <div className="rounded-full bg-secondary-200 p-1 text-secondary-500">
          <BsSend
            size={16}
            className="-translate-x-[1px] translate-y-[1px]"
            onClick={handleClickSendMessage}
          />
        </div>
      </div>
    </Modal>
  )
}

export default ModalFriendIceCream

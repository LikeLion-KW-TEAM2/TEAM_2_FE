import ErrorMessage from '@/components/ErrorMessage'
import Loading from '@/components/Loading'
import ModalDelete from '@/components/ModalDelete'
import SubHeader from '@/components/SubHeader'
import { TextWithProfile } from '@/components/TextWithProfile'
import { useModal } from '@/hooks/useModal'
import {
  useDeleteFriend,
  useFriendList,
} from '@/services/mypage/useMypageService'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const FriendList = () => {
  const { data: friendList, isPending } = useFriendList()
  const { isOpen, openModal, closeModal } = useModal()
  const { mutate: deleteFriend } = useDeleteFriend()
  const [clickedUserId, setClickedUserId] = useState<string>('')

  const handleOpenModal = (userId: string) => {
    setClickedUserId(userId)
    openModal()
  }
  const handleClickDeleteButton = (userId: string) => {
    deleteFriend(userId)
  }

  return (
    <div>
      <SubHeader hidden>친구 목록 관리</SubHeader>

      {isPending ? (
        <Loading />
      ) : (
        <div className="flexColumn gap-8">
          {friendList?.map(({ userId, name, image }) => (
            <div className="flexBetweenAlign px-4" key={userId}>
              <TextWithProfile>
                <TextWithProfile.Image src={image} />
                <TextWithProfile.TextContainer>
                  <TextWithProfile.PrimaryText>
                    {userId}
                  </TextWithProfile.PrimaryText>
                  <TextWithProfile.SecondaryText>
                    {name}
                  </TextWithProfile.SecondaryText>
                </TextWithProfile.TextContainer>
              </TextWithProfile>

              <AiOutlineClose
                size={16}
                className="cursor-pointer text-secondary-400"
                onClick={() => handleOpenModal(userId)}
              />
            </div>
          ))}
          {friendList?.length === 0 && (
            <ErrorMessage>친구 목록이 없습니다.</ErrorMessage>
          )}
        </div>
      )}
      <ModalDelete
        isOpen={isOpen}
        closeModal={closeModal}
        handleClick={() => handleClickDeleteButton(clickedUserId)}
      />
    </div>
  )
}

export default FriendList

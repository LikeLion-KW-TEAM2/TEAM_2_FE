import Button from '@/components/Button'
import { TextWithProfile } from '@/components/TextWithProfile'
import { useModal } from '@/hooks/useModal'
import ModalFriendIceCream from './ModalFriendIceCream'
import { IFriendItem } from '@/types/friend'

const FriendItem = ({ friend }: IFriendItem) => {
  const { userId, name, image, count } = friend
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <div className="flexAlign gap-2 border-b border-secondary-100 px-4 py-[20px]">
        <div className="flex-1">
          <TextWithProfile>
            <TextWithProfile.Image src={image} />
            <TextWithProfile.TextContainer>
              <TextWithProfile.PrimaryText>{name}</TextWithProfile.PrimaryText>
              <TextWithProfile.SecondaryText>
                개선 중인 습관 : {count}개
              </TextWithProfile.SecondaryText>
            </TextWithProfile.TextContainer>
          </TextWithProfile>
        </div>

        <Button size="xsmall" handleClick={openModal}>
          <p>아이스크림</p>
          <p>보기</p>
        </Button>
      </div>

      <ModalFriendIceCream
        isOpen={isOpen}
        closeModal={closeModal}
        userId={userId}
      />
    </>
  )
}

export default FriendItem

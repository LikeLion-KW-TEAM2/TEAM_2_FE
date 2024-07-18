import Button from '@/components/Button'
import { TextWithProfile } from '@/components/TextWithProfile'

const FriendItem = ({ openModal }: { openModal: () => void }) => {
  return (
    <div className="flexAlign gap-2 border-b border-secondary-100 px-4 py-[20px]">
      <div className="flex-1">
        <TextWithProfile>
          <TextWithProfile.Image />
          <TextWithProfile.TextContainer>
            <TextWithProfile.PrimaryText>고로케</TextWithProfile.PrimaryText>
            <TextWithProfile.SecondaryText>
              개선 중인 습관 : 3개
            </TextWithProfile.SecondaryText>
          </TextWithProfile.TextContainer>
        </TextWithProfile>
      </div>

      <Button size="xsmall" handleClick={openModal}>
        <p>아이스크림</p>
        <p>보기</p>
      </Button>
    </div>
  )
}

export default FriendItem

import Button from '@/components/Button'
import { TextWithProfile } from '@/components/TextWithProfile'

const FriendItem = ({ openModal }: { openModal: () => void }) => {
  return (
    <div className="flex gap-2 rounded-2xl bg-secondary-100 p-4">
      <section className="flex-1">
        <TextWithProfile>
          <TextWithProfile.Image />
          <TextWithProfile.TextContainer>
            <TextWithProfile.PrimaryText>고롷케</TextWithProfile.PrimaryText>
            <TextWithProfile.SecondaryText>
              개선 중인 습관 : 3개
            </TextWithProfile.SecondaryText>
          </TextWithProfile.TextContainer>
        </TextWithProfile>
      </section>
      <Button size="xsmall" handleClick={openModal}>
        아이스크림 보기
      </Button>
    </div>
  )
}

export default FriendItem

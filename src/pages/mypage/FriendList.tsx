import SubHeader from '@/components/SubHeader'
import { TextWithProfile } from '@/components/TextWithProfile'
import { AiOutlineClose } from 'react-icons/ai'

const FriendList = () => {
  return (
    <div>
      <SubHeader hidden>친구 목록 관리</SubHeader>

      <div className="flexColumn gap-8">
        {[...Array(7)].map((_, i) => (
          <div className="flexBetweenAlign px-4" key={i}>
            <TextWithProfile>
              <TextWithProfile.Image />
              <TextWithProfile.TextContainer>
                <TextWithProfile.PrimaryText>
                  qwer1234
                </TextWithProfile.PrimaryText>
                <TextWithProfile.SecondaryText>
                  고롷케
                </TextWithProfile.SecondaryText>
              </TextWithProfile.TextContainer>
            </TextWithProfile>

            <AiOutlineClose className="text-secondary-400" size={16} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendList

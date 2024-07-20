import SubHeader from '@/components/SubHeader'
import { TextWithProfile } from '@/components/TextWithProfile'
import { useFriendList } from '@/services/mypage/useMypageService'
import { AiOutlineClose } from 'react-icons/ai'

const FriendList = () => {
  const { data: friendList, status } = useFriendList()

  if (status === 'pending') return null
  if (status === 'error') return null

  return (
    <div>
      <SubHeader hidden>친구 목록 관리</SubHeader>

      <div className="flexColumn gap-8">
        {friendList?.list.map(({ userId, name, profileImage }) => (
          <div className="flexBetweenAlign px-4" key={userId}>
            <TextWithProfile>
              <TextWithProfile.Image src={profileImage} />
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
              className="cursor-pointer text-secondary-400"
              size={16}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendList

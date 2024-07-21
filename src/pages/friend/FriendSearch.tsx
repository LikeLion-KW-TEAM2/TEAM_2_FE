import NavLayout from '@/components/NavLayout'
import SubHeader from '@/components/SubHeader'
import SearchInput from './components/SearchInput'
import { TextWithProfile } from '@/components/TextWithProfile'
import Button from '@/components/Button'
import { useAddition, useSearchList } from '@/services/friend/useFriendService'
import { useSearchParams } from 'react-router-dom'

const FriendSearch = () => {
  const [searchParams, _] = useSearchParams()
  const searchId = searchParams.get('search') as string
  const { data: searchData, status } = useSearchList(searchId)
  const { mutate: addFriend } = useAddition()

  const handleClickAddButton = (userId: string) => {
    addFriend(userId)
  }

  if (status === 'pending') return null
  if (status === 'error') return null

  return (
    <NavLayout>
      <SubHeader hidden>친구 검색</SubHeader>
      <SearchInput />

      <div className="flexColumn mt-8 flex-1 gap-5 overflow-y-scroll scrollbar-hide">
        {searchData.map(({ userId, name, image, isFriend }) => (
          <div key={userId} className="flexBetweenAlign">
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

            <Button
              size="xsmall"
              disabled={isFriend}
              handleClick={() => handleClickAddButton(userId)}
            >
              추가
            </Button>
          </div>
        ))}
      </div>
    </NavLayout>
  )
}

export default FriendSearch

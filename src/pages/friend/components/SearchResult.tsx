import Button from '@/components/Button'
import ErrorMessage from '@/components/ErrorMessage'
import Loading from '@/components/Loading'
import { TextWithProfile } from '@/components/TextWithProfile'
import { useAddition } from '@/services/friend/useFriendService'
import { ISearchResult } from '@/types/friend'
import { AddFriendRequest } from '@/types/record'

const SearchResult = ({ openModal, searchData, status }: ISearchResult) => {
  const { mutate: addFriend } = useAddition()

  const handleClickAddButton = ({ userId, name }: AddFriendRequest) => {
    addFriend({ userId, name }, { onSuccess: openModal })
  }

  if (status === 'pending') return <Loading />
  if (status === 'error')
    return <ErrorMessage>검색 결과가 없습니다.</ErrorMessage>

  return (
    <>
      {searchData?.map(({ userId, name, image, isFriend }) => (
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
            handleClick={() => handleClickAddButton({ userId, name })}
          >
            추가
          </Button>
        </div>
      ))}
    </>
  )
}

export default SearchResult

import NavLayout from '@/components/NavLayout'
import SubHeader from '@/components/SubHeader'
import SearchInput from './components/SearchInput'
import { TextWithProfile } from '@/components/TextWithProfile'
import Button from '@/components/Button'
import { useAddition, useSearchList } from '@/services/friend/useFriendService'
import { useSearchParams } from 'react-router-dom'
import { AddFriendRequest } from '@/types/record'
import { useModal } from '@/hooks/useModal'
import ModalAddFriend from './components/ModalAddFriend'
import ErrorMessage from '@/components/ErrorMessage'
import Loading from '@/components/Loading'

const FriendSearch = () => {
  const [searchParams, _] = useSearchParams()
  const { isOpen, openModal, closeModal } = useModal()
  const searchId = searchParams.get('search') as string
  const { data: searchData, isPending, isError } = useSearchList(searchId)
  const { mutate: addFriend } = useAddition()

  const handleClickAddButton = ({ userId, name }: AddFriendRequest) => {
    addFriend({ userId, name }, { onSuccess: openModal })
  }

  return (
    <>
      <NavLayout>
        <SubHeader hidden>친구 검색</SubHeader>
        <SearchInput />

        {isPending ? (
          <Loading />
        ) : (
          <div className="flexColumn flex-1 gap-5 overflow-y-scroll scrollbar-hide">
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
            {isError && <ErrorMessage>검색 결과가 없습니다.</ErrorMessage>}
          </div>
        )}
      </NavLayout>
      <ModalAddFriend isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default FriendSearch

import NavLayout from '@/components/NavLayout'
import SubHeader from '@/components/SubHeader'
import SearchInput from './components/SearchInput'
import { TextWithProfile } from '@/components/TextWithProfile'
import Button from '@/components/Button'

const FriendSearch = () => {
  return (
    <NavLayout>
      <SubHeader hidden>친구 검색</SubHeader>
      <SearchInput />

      <div className="flexColumn mt-8 flex-1 gap-5 overflow-y-scroll scrollbar-hide">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="flexBetweenAlign">
            <TextWithProfile>
              <TextWithProfile.Image />
              <TextWithProfile.TextContainer>
                <TextWithProfile.PrimaryText>
                  qwer1234
                </TextWithProfile.PrimaryText>
                <TextWithProfile.SecondaryText>
                  고로케
                </TextWithProfile.SecondaryText>
              </TextWithProfile.TextContainer>
            </TextWithProfile>

            <Button size="xsmall">추가</Button>
          </div>
        ))}
      </div>
    </NavLayout>
  )
}

export default FriendSearch

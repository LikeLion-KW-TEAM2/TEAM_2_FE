import NavLayout from '@/components/NavLayout'
import SubHeader from '@/components/SubHeader'
import SearchInput from './components/SearchInput'
import { TextWithProfile } from '@/components/TextWithProfile'

const FriendSearch = () => {
  return (
    <NavLayout>
      <SubHeader hidden>친구 검색</SubHeader>
      <SearchInput />

      <div className="flexColumn mt-8 gap-5">
        {[...Array(7)].map((_, index) => (
          <div key={index}>
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
          </div>
        ))}
      </div>
    </NavLayout>
  )
}

export default FriendSearch

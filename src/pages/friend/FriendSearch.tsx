import NavLayout from '@/components/NavLayout'
import SubHeader from '@/components/SubHeader'
import SearchInput from './components/SearchInput'

const FriendSearch = () => {
  return (
    <NavLayout>
      <SubHeader hidden>친구 검색</SubHeader>
      <SearchInput />

      <div></div>
    </NavLayout>
  )
}

export default FriendSearch

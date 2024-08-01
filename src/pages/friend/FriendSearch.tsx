import NavLayout from '@/components/NavLayout'
import SubHeader from '@/components/SubHeader'
import SearchInput from './components/SearchInput'
import { useModal } from '@/hooks/useModal'
import ModalAddFriend from './components/ModalAddFriend'
import SearchResult from './components/SearchResult'
import { useSearch } from '@/store/search'
import { useSearchList } from '@/services/friend/useFriendService'

const FriendSearch = () => {
  const searchId = useSearch()
  const { isOpen, openModal, closeModal } = useModal()
  const { data: searchData, status } = useSearchList(searchId)

  return (
    <>
      <NavLayout>
        <SubHeader to="/friend" hidden>
          친구 검색
        </SubHeader>
        <SearchInput />
        <div className="flexColumn flex-1 gap-5 overflow-y-scroll scrollbar-hide">
          <SearchResult
            openModal={openModal}
            searchData={searchData}
            status={status}
          />
        </div>
      </NavLayout>
      <ModalAddFriend isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default FriendSearch

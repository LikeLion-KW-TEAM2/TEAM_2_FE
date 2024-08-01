import useInput from '@/hooks/useInput'
import { useSearchActions } from '@/store/search'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const navigate = useNavigate()
  const { input: searchInput, onChange, reset } = useInput({ searchId: '' })
  const { setSearch } = useSearchActions()

  const handleClickSearch = () => {
    setSearch(searchInput.searchId)
    reset()
    navigate('/friend/search')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClickSearch()
    }
  }

  return (
    <div className="mb-8 flex items-center gap-3 overflow-hidden rounded-xl px-4 py-2 shadow-md">
      <input
        type="search"
        name="searchId"
        enterKeyHint="search"
        value={searchInput.searchId}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent text-secondary-900 focus:outline-none"
        placeholder="친구의 아이디를 입력해주세요"
      />
      {searchInput.searchId && (
        <CgClose
          size={16}
          strokeWidth={1}
          className="cursor-pointer text-secondary-400"
          onClick={reset}
        />
      )}
      <AiOutlineSearch
        size={24}
        className="flex-shrink-0 cursor-pointer text-secondary-400"
        onClick={handleClickSearch}
      />
    </div>
  )
}

export default SearchInput

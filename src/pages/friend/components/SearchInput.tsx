import useInput from '@/hooks/useInput'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const navigate = useNavigate()
  const { input, onChange, reset } = useInput({ searchId: '' })

  const handleClickSearch = () => {
    reset()
    navigate(`/friend/search?search=${input.searchId}`)
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
        value={input.searchId}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent text-secondary-900 focus:outline-none"
        placeholder="친구의 아이디를 입력해주세요"
      />
      {input.searchId && (
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

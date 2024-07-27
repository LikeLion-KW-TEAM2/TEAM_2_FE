import useInput from '@/hooks/useInput'
import { RiSearchLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const navigate = useNavigate()
  const { input, onChange, reset } = useInput({ searchId: '' })

  const handleClickSearch = () => {
    reset()
    navigate(`/friend/search?search=${input.searchId}`)
  }

  return (
    <div className="flexAlign mb-8 gap-3 rounded-xl p-2 shadow-md">
      <RiSearchLine
        size={24}
        className="cursor-pointer text-secondary-400"
        onClick={handleClickSearch}
      />
      <input
        type="search"
        name="searchId"
        value={input.searchId}
        onChange={onChange}
        className="flex-1 text-secondary-900 focus:outline-none"
        placeholder="친구의 아이디를 입력해주세요"
      />
    </div>
  )
}

export default SearchInput

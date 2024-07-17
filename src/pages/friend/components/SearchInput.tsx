import { RiSearchLine } from 'react-icons/ri'

const SearchInput = () => {
  return (
    <div className="flexAlign gap-3 rounded-xl p-2 shadow-md">
      <RiSearchLine size={24} className="text-secondary-400" />
      <input
        className="flex-1 text-secondary-900 focus:outline-none"
        placeholder="친구의 아이디를 입력해주세요"
      />
    </div>
  )
}

export default SearchInput

import { RiSearchLine } from 'react-icons/ri'

const SearchInput = () => {
  return (
    <div className="flexAlign mb-8 gap-3 rounded-xl p-2 shadow-medium">
      <RiSearchLine size={24} className="text-secondary-400" />
      <input
        className="text-secondary-900 focus:outline-none"
        placeholder="친구의 아이디를 입력해주세요"
      />
    </div>
  )
}

export default SearchInput
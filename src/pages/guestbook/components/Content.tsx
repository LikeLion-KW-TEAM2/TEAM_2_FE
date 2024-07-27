import { IContent } from '@/types/guestbook'
import { BiTrash } from 'react-icons/bi'

const Content = ({ content, name, openModal }: IContent) => {
  return (
    <div className="flexColumn justify-end gap-3 rounded-2xl border border-secondary-100 px-4 py-3 shadow-small">
      <p className="text-medium font-medium text-secondary-800">{content}</p>
      <div className="flexAlign gap-1 self-end">
        <p className="text-xsmall font-medium text-primary-500">{name}</p>
        <BiTrash
          size={12}
          className="cursor-pointer text-error-primary"
          onClick={openModal}
        />
      </div>
    </div>
  )
}

export default Content

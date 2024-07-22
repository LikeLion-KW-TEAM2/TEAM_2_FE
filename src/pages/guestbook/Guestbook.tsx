import HeaderWithProfile from '@/components/HeaderWithProfile'
import NavLayout from '@/components/NavLayout'
import { useModal } from '@/hooks/useModal'
import ModalDelete from '@/components/ModalDelete'
import {
  useDeleteContent,
  useGuestBookList,
} from '@/services/guestbook/useGuestbookService'
import Content from './components/Content'

const Guestbook = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const { data: guestbookData, status } = useGuestBookList()
  const { mutate: deleteContent } = useDeleteContent()

  if (status === 'pending') return null
  if (status === 'error') return null

  const { myImage, guestBooks } = guestbookData

  return (
    <>
      <NavLayout>
        <HeaderWithProfile src={myImage} />

        <div className="flexColumn flex-1 gap-4 overflow-y-scroll scrollbar-hide">
          {guestBooks.map(({ date, list }) => (
            <div key={date} className="flexColumn mb-7 gap-2">
              <h6 className="font-bold text-primary-600">{date}</h6>
              {list.map(({ id, name, content }, index) => (
                <>
                  <Content
                    key={index}
                    name={name}
                    content={content}
                    openModal={openModal}
                  />
                  <ModalDelete
                    isOpen={isOpen}
                    closeModal={closeModal}
                    handleClick={() => {
                      deleteContent(id)
                    }}
                  />
                </>
              ))}
            </div>
          ))}
        </div>
      </NavLayout>
    </>
  )
}

export default Guestbook

import HeaderWithProfile from '@/components/HeaderWithProfile'
import NavLayout from '@/components/NavLayout'
import { useModal } from '@/hooks/useModal'
import ModalDelete from '@/components/ModalDelete'
import {
  useDeleteContent,
  useGuestBookList,
} from '@/services/guestbook/useGuestbookService'
import Content from './components/Content'
import groupByDate from '@/utils/groupByDate'
import ErrorMessage from '@/components/ErrorMessage'
import dayjs from 'dayjs'

const Guestbook = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const { data: guestbookData } = useGuestBookList()
  const { mutate: deleteContent } = useDeleteContent()

  const groupedGuestbooks = groupByDate(guestbookData?.guestbooks || [])

  return (
    <>
      <NavLayout>
        <HeaderWithProfile src={guestbookData?.myImage} />

        <div className="flexColumn flex-1 gap-4 overflow-y-scroll scrollbar-hide">
          {groupedGuestbooks.map(({ date, items }) => (
            <div key={date} className="flexColumn mb-7 gap-2">
              <h6 className="font-bold text-primary-600">
                {dayjs(date).format('YYYY/MM/DD')}
              </h6>
              {items.map(({ id, writer, content }) => (
                <div key={id}>
                  <Content
                    name={writer}
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
                </div>
              ))}
            </div>
          ))}
          {groupedGuestbooks.length === 0 && (
            <ErrorMessage>방명록이 존재하지 않습니다.</ErrorMessage>
          )}
        </div>
      </NavLayout>
    </>
  )
}

export default Guestbook

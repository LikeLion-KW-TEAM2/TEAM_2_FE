import SubHeader from '@/components/SubHeader'
import { IoIosArrowForward } from 'react-icons/io'
import { TextWithProfile } from '@/components/TextWithProfile'
import { Link } from 'react-router-dom'
import { useMypage, useRemove } from '@/services/mypage/useMypageService'
import { useModal } from '@/hooks/useModal'
import ModalRemove from './components/ModalRemove'
import { useTokenActions } from '@/store/token'
import { MYPAGE_LIST } from '@/constants'

const Mypage = () => {
  const { data: mypageData } = useMypage()
  const { mutate: remove } = useRemove()
  const { isOpen, openModal, closeModal } = useModal()
  const { resetToken } = useTokenActions()

  const handleClickRemoveButton = () => {
    resetToken()
    remove()
  }

  return (
    <div>
      <SubHeader hidden>마이페이지</SubHeader>
      {mypageData && (
        <Link
          to={'/mypage/account-info'}
          className="flexAlign mb-7 mt-8 gap-3 rounded-2xl border border-secondary-200 px-4 py-6 shadow-small"
        >
          <TextWithProfile>
            <TextWithProfile.Image src={mypageData.image} />
            <TextWithProfile.TextContainer>
              <TextWithProfile.PrimaryText>
                {mypageData.name}
              </TextWithProfile.PrimaryText>
              <TextWithProfile.SecondaryText>
                프로필 수정하기
              </TextWithProfile.SecondaryText>
            </TextWithProfile.TextContainer>
          </TextWithProfile>
          <IoIosArrowForward className="ml-auto text-secondary-400" size={24} />
        </Link>
      )}

      <ul className="flexColumn gap-7 px-2">
        {MYPAGE_LIST.map((item) => (
          <Link to={item.link} key={item.text}>
            <li>{item.text}</li>
          </Link>
        ))}
        <li className="cursor-pointer text-error-primary" onClick={openModal}>
          계정 탈퇴
        </li>
      </ul>

      <ModalRemove
        isOpen={isOpen}
        closeModal={closeModal}
        handleClick={handleClickRemoveButton}
      />
    </div>
  )
}

export default Mypage

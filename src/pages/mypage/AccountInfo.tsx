import SubHeader from '@/components/SubHeader'
import { useAccountInfo } from '@/services/mypage/useMypageService'
import AccountInfoForm from './components/AccountInfoForm'
import profileImage from '@/utils/profileImage'

const AccountInfo = () => {
  const { data: accountInfoData, status } = useAccountInfo()

  if (status === 'pending') return null

  return (
    <div>
      <SubHeader hidden>회원 정보 수정</SubHeader>
      <AccountInfoForm
        name={accountInfoData?.name || ''}
        myImage={profileImage(accountInfoData?.myImage)}
      />
    </div>
  )
}

export default AccountInfo

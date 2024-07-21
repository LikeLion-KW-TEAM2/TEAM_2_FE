import SubHeader from '@/components/SubHeader'
import { useAccountInfo } from '@/services/mypage/useMypageService'
import AccountInfoForm from './components/AccountInfoForm'

const AccountInfo = () => {
  const { data: accountInfoData, status } = useAccountInfo()

  if (status === 'pending') return null
  if (status === 'error') return null

  return (
    <div>
      <SubHeader hidden>회원 정보 수정</SubHeader>
      <AccountInfoForm
        name={accountInfoData.name}
        myImage={accountInfoData.myImage}
      />
    </div>
  )
}

export default AccountInfo

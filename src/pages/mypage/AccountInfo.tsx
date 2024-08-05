import SubHeader from '@/components/SubHeader'
import { useAccountInfo } from '@/services/mypage/useMypageService'
import AccountInfoForm from './components/AccountInfoForm'
import Loading from '@/components/Loading'
import ErrorPage from '@/components/ErrorPage'

const AccountInfo = () => {
  const { data: accountInfoData, isPending, isError } = useAccountInfo()

  if (isPending) return <Loading />
  if (isError) return <ErrorPage />

  return (
    <div className="flexColumn h-full">
      <SubHeader hidden>회원 정보 수정</SubHeader>
      <AccountInfoForm
        name={accountInfoData?.name || ''}
        myImage={accountInfoData?.myImage}
      />
    </div>
  )
}

export default AccountInfo

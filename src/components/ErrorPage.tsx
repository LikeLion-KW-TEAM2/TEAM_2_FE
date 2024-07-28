import errorImage from '@/assets/images/icecream-6.svg'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flexColumnAlign w-[343px]">
        <h2 className="text-center font-bold text-primary-900">
          오류가 발생했어요...
        </h2>
        <img src={errorImage} className="-mt-7 mb-5 w-[211px]" alt="error" />
        <Button
          width="w-full"
          size="large"
          handleClick={() => navigate('/record')}
        >
          메인 페이지로 돌아가기
        </Button>
      </div>
    </div>
  )
}

export default ErrorPage

import icecream1 from '@/assets/images/icecream-1.svg'
import icecream2 from '@/assets/images/icecream-2.svg'
import icecream3 from '@/assets/images/icecream-3.svg'
import icecream4 from '@/assets/images/icecream-4.svg'
import icecream5 from '@/assets/images/icecream-5.svg'
import icecream6 from '@/assets/images/icecream-6.svg'

const convertLevelToIcecream = (level: number) => {
  const imageArr = [
    icecream6,
    icecream5,
    icecream4,
    icecream3,
    icecream2,
    icecream1,
  ]

  return imageArr[level]
}

export default convertLevelToIcecream

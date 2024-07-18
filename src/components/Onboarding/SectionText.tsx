import { ReactNode } from 'react'

interface IData {
  image: ReactNode
  header: string
  first: string
  second: string
}

const SectionText = ({ data }: { data: IData[] }) => {
  return (
    <>
      {data.map(({ image, header, first, second }) => (
        <div className="flexColumn w-full flex-shrink-0 gap-9" key={header}>
          <div className="grid h-[232px] w-full place-items-center">
            {image}
          </div>
          <div className="flexColumnAlign mb-9 gap-[40px]">
            <h4 className="font-bold text-secondary-800">{header}</h4>
            <div className="text-center font-medium text-secondary-700">
              <h5>{first}</h5>
              <h5>{second}</h5>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SectionText

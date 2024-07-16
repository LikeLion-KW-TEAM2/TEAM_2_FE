import Button from '@/components/Button'

const FriendItem = () => {
  return (
    <div className="flex gap-2 rounded-2xl bg-secondary-100 p-4">
      <div className="h-[52px] w-[52px] rounded-full bg-secondary-200" />
      <div className="flexColumn mr-auto gap-1 text-secondary-900">
        <p className="text-medium font-medium">고롷케</p>
        <p className="text-xsmall">개선 중인 습관 : 3개</p>
      </div>
      <Button size="xsmall">아이스크림 보기</Button>
    </div>
  )
}

export default FriendItem

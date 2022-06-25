import { MtricItems } from './item'

export const MtricItem = () => {
  return (
    <>
      <MtricItems count={'700'} unit={'만 명'} script={'의 여행자'} />
      <MtricItems count={'100'} unit={'만 개'} script={'의 여행 리뷰'} />
      <MtricItems count={'470'} unit={'만 개'} script={'의 여행 일정'} />
    </>
  )
}

import { MetricItems } from './item'
import useFadeIn from '../../hooks/useFadeIn'

export const MetricItem = () => {
  const fadeIn = useFadeIn(0.7, 0.4)
  const items = [
    {
      count: 700,
      unit: '만 명',
      script: '의 여행자',
    },
    {
      count: 100,
      unit: '만 개',
      script: '의 여행 리뷰',
    },
    {
      count: 470,
      unit: '만 개',
      script: '의 여행 일정',
    },
  ]
  return (
    <div {...fadeIn}>
      {items.map((item, i) => {
        return <MetricItems {...item} key={i} />
      })}
    </div>
  )
}

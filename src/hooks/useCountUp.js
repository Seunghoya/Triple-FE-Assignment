import { useEffect, useRef } from 'react'

const useCountUp = (end, start = 0, duration = 2000) => {
  const domRef = useRef()
  const stepTime = Math.floor(duration / (end - end * 0.8))

  // 숫자 증가 속도가 점점 감소하는 애니메이션 구현

  useEffect(() => {
    const { current } = domRef

    if (current) {
      let currentNum = end * 0.8
      const counter = setInterval(() => {
        currentNum += 1
        current.innerHTML = currentNum
        if (currentNum >= end) {
          clearInterval(counter)
        }
      }, stepTime)
    }
  }, [end, start])

  return {
    ref: domRef,
  }
}

export default useCountUp

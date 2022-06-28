import { useEffect, useRef } from 'react'
import easeOutExpo from '../utils/easeOutExpo'

const useCountUp = (end, start = 0, duration = 2000) => {
  const domRef = useRef()
  const frameRate = 1000 / 60
  const totalFrame = Math.round(duration / frameRate)

  useEffect(() => {
    const { current } = domRef
    let startTime = new Date().getTime()

    if (current) {
      let currentNum = start
      const counter = setInterval(() => {
        currentNum += 1
        const progress = easeOutExpo(currentNum / totalFrame)
        current.innerHTML = Math.round(end * progress)

        if (progress === 1) {
          clearInterval(counter)
          let endTime = new Date().getTime()
          console.log(`${end} 실행시간: ${endTime - startTime}ms`)
        }
      }, frameRate)
    }
  }, [end, start, totalFrame])
  return {
    ref: domRef,
  }
}

export default useCountUp

import { useEffect, useRef } from 'react'
import easeOutExpo from '../utils/easeOutExpo'

const useCountUp = (end, start = 0, duration = 2000) => {
  const domRef = useRef()
  const frameRate = 1000 / 60
  const totalFrame = Math.round(duration / frameRate)

  useEffect(() => {
    const { current } = domRef

    if (current) {
      let currentNum = start
      const counter = setInterval(() => {
        currentNum += 1
        const progress = easeOutExpo(currentNum / totalFrame)
        current.innerHTML = Math.round(end * progress)

        if (progress === 1) {
          clearInterval(counter)
        }
      }, frameRate)
    }
  }, [end, start, totalFrame])
  return {
    ref: domRef,
  }
}

export default useCountUp

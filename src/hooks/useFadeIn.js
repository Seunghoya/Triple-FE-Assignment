import { useEffect, useRef } from 'react'

const useFadeIn = (duration, delay) => {
  const domRef = useRef()

  useEffect(() => {
    const { current } = domRef

    if (current) {
      current.style.transition = `${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1
      current.style.transform = 'translate3d(0, 0, 0)'
    }
  }, [delay, duration])

  return {
    ref: domRef,
    style: {
      opacity: 0,
      transform: 'translate3d(0, 20px, 0)',
    },
  }
}

export default useFadeIn

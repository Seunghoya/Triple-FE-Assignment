// https://easings.net/ko#easeOutExpo

const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export default easeOutExpo

import styled from 'styled-components'
import Logo from '../../assets/images/triple2x.png'
import useFadeIn from '../../hooks/useFadeIn'

export const ContentLogo = () => {
  const fadeIn = useFadeIn(0.7, 0.3)

  return (
    <ContentLogoWrapper {...fadeIn}>
      <img src={Logo} alt="logo" width={'400px'} />
      <p>2021년 12월 기준</p>
    </ContentLogoWrapper>
  )
}

const ContentLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & p {
    position: relative;
    bottom: 80px;
  }
`

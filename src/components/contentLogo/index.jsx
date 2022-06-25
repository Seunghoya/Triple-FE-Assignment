import styled from 'styled-components'
import Logo from '../../assets/images/triple2x.png'

export const ContentLogo = () => {
  return (
    <ContentLogoWrapper>
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

import styled from 'styled-components'
import { Awards } from '../../components/awards/index'
import { MtricItem } from '../../components/metricItem/index'
import { ContentLogo } from '../../components/contentLogo/index'

export const Main = () => {
  return (
    <MainContainer>
      <LeftSection>
        <ContentLogo />
      </LeftSection>
      <RightSection>
        <MtricItem />
        <Awards />
      </RightSection>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  top: auto;
  padding: 100px;
`

const LeftSection = styled.div`
  padding: 0 80px 0 0;
`

const RightSection = styled.div`
  padding: 40px 0 0 80px;
`

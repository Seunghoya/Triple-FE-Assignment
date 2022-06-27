import styled from 'styled-components'
import { useEffect } from 'react'
import { Awards } from '../../components/awards/index'
import { MetricItem } from '../../components/metricItem/index'
import { ContentLogo } from '../../components/contentLogo/index'

export const Main = () => {
  return (
    <MainContainer>
      <LeftSection>
        <ContentLogo />
      </LeftSection>
      <RightSection>
        <MetricItem />
        <Awards />
      </RightSection>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  top: auto;
  margin: 100px;
`

const LeftSection = styled.div`
  margin: 0 80px 0 0;
`

const RightSection = styled.div`
  margin: 20px 0 0 80px;
`

import { Award } from './item'
import styled from 'styled-components'
import google from '../../assets/images/play-store2x.png'
import apple from '../../assets/images/badge-apple4x.png'

export const Awards = () => {
  return (
    <AwardContainer>
      <Award
        img={google}
        script1={'2018 구글 플레이스토어'}
        script2={'올해의 앱 최우수상 수상'}
      />
      <Award
        img={apple}
        script1={'2018 애플 앱스토어'}
        script2={'오늘의 여행앱 선정'}
      />
    </AwardContainer>
  )
}

const AwardContainer = styled.div`
  display: flex;
  padding-bottom: 140px;
`

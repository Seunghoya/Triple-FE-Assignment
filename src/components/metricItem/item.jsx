import styled from 'styled-components'
import useCountUp from '../../hooks/useCountUp'

export const MetricItems = ({ count, unit, script }) => {
  const countUp = useCountUp(count, 0, 2000)

  return (
    <MetricItemsContainer>
      <p>
        <strong {...countUp}>{count}</strong>
        <strong>{unit}</strong>
      </p>
      <p>{script}</p>
    </MetricItemsContainer>
  )
}

const MetricItemsContainer = styled.div`
  display: flex;
  & p {
    font-size: 36px;
    margin: 0 0 20px 0;
  }
`

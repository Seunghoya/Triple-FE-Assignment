import styled from 'styled-components'

export const MtricItems = ({ count, unit, script }) => {
  return (
    <MtricItemsContainer>
      <p>
        <strong>
          {count}
          {unit}
        </strong>
      </p>
      <p>{script}</p>
    </MtricItemsContainer>
  )
}

const MtricItemsContainer = styled.div`
  display: flex;
  & p {
    font-size: 36px;
    margin: 0 0 20px 0;
  }
`

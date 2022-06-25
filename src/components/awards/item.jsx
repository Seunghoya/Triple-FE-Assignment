import styled from 'styled-components'

export const Award = ({ img, script1, script2 }) => {
  return (
    <AwardWrapper>
      <div>
        <img src={img} height="54px" />
      </div>
      <div>
        <p>{script1}</p>
        <p>{script2}</p>
      </div>
    </AwardWrapper>
  )
}

const AwardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 5px 0;
  font-size: 14px;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.8);

  &:first-child {
    margin-right: 39px;
  }

  & div:last-child {
    margin-left: 0.7rem;
  }

  & p {
    line-height: 22px;
    margin: 0;
  }
`

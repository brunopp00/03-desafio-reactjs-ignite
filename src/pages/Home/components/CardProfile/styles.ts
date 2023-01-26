import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  display: flex;
  width: 864px;
  margin-top: -80px;
  height: 212px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-input']};
  align-items: center;

  img {
    width: 148px;
    height: 148px;
    margin-left: 30px;
    border-radius: 6px;
  }
`

export const TextProfile = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }

    p {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

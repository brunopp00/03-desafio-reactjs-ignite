import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 296px;

  background-color: ${(props) => props.theme['base-profile']};
`

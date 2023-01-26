import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/effect-left.png'
import rigth from '../../assets/effect -rigth.png'
export function Header() {
  return (
    <HeaderContainer>
      <img src={left} alt="" />
      <img src={logo} alt="" />
      <img src={rigth} alt="" />
    </HeaderContainer>
  )
}

import styled from "styled-components"
import { Link } from "gatsby"
import { FaHamburger } from "react-icons/fa"

export const Nav = styled.nav`
  background: ${props => (props.isHomePage ? "transparent" : "#0d0909")};
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    position: absolute;
    top: 24px;
    left: 25px;
  }

  @media screen and (max-width: 350px) {
    position: absolute;
    top: 30px;
    left: 25px;
    font-size: 1.5rem;
  }
`

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
`

export const NavbarP = styled.p`
  transform: translate(-175%, 100%);
  font-weight: bold;
`
export const Bars = styled(FaHamburger)`
  font-size: 2rem;
  transform: translate(-50%, -75%);
`

import styled from "styled-components"
import { Link } from "gatsby"

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`

export const FooterWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 460px) {
    flex-direction: column;
    row-gap: 1.5rem;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 240px;
`

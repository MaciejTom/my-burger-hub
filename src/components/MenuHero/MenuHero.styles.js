import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const BurgerContainer = styled(BackgroundImage)`
  height: 100vh;
  max-height: 300px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1em;
  opacity: unset !important;
`

export const Overlay = styled.header`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
`
export const MenuHeroH1 = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
`

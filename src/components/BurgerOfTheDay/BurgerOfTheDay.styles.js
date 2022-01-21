import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

export const Burger = styled(BackgroundImage)`
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  opacity: unset !important;

  
`
export const BurgerH1 = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
`
export const BurgerP = styled.p`
  margin-bottom: 1em;
  font-size: clamp(1rem, 3vw, 2rem);
`

export const BurgerContainer = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
`

export const BurgerButton = styled(Link)`
  font-size: 1.4rem;
  padding: 0.4em 2em;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;
  text-decoration: none;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`

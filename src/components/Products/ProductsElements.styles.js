import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const ProductsContainer = styled.section`
  min-height: 100vh;
  padding: ${props => (props.full && !props.isBurger ? "1em" : "4em")} 1em 2em ;
  background: #150f0f;
  color: #fff;
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`

export const ProductCard = styled.div`
  margin: 0 2em 2em 2em;
  line-height: 2;
  width: 300px;
`

export const ProductImg = styled(GatsbyImage)`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 9px 9px #fdc500;
  border-radius: 3px 3px 35px 3px;
`

export const ProductsHeading = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2em;
`

export const ProductTitle = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0.4em 0;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  text-align: center;
`

export const ProductDesc = styled.p`
  margin-bottom: 1em;
  @media (min-width: 730px) {
   min-height: ${props => props.isBurger && "65px"} }
  }  
`

export const ProductPrice = styled.p`
  margin: 0.3em;
  font-size: 2rem;
`

export const ProductButton = styled(Link)`
  font-size: 1rem;
  padding: 0.7em 4em;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  text-decoration: none;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`

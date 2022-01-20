import React from "react"
//Styles
import { Burger, BurgerContainer, BurgerButton, BurgerH1, BurgerP } from "./BurgerOfTheDay.styles"
//GraphQL
import { UseBurgerOTD } from "../../hooks/UseBurgerOTD"
//Image plugins
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const BurgerOfTheDay = () => {
  const {
    wpPage: { ACF_BurgerOfTheDay_Component: data },
  } = UseBurgerOTD()

  const image = getImage(data.burgerImage.localFile.childImageSharp)

  const bgImage = convertToBgImage(image)

  return (
    <BurgerContainer>
    <Burger {...bgImage}>     
        <BurgerH1>{data.burgerText}</BurgerH1>
        <BurgerP>{data.burgerSubtext}</BurgerP>
        <BurgerButton to="/menu">Order Now</BurgerButton>      
    </Burger>
    </BurgerContainer>
  )
}

export default BurgerOfTheDay

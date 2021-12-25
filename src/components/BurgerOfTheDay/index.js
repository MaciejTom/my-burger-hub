import React from "react"
import { BurgerContainer, BurgerButton, Overlay } from "./BurgerOfTheDay.styles"
//GraphQL
import { UseBurgerOTD } from "../../hooks/UseBurgerOTD"
//Image plugins
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"

const BurgerOfTheDay = () => {
  const {
    wpPage: { ACF_BurgerOfTheDay_Component: data },
  } = UseBurgerOTD()

  console.log(data)

  const image = getImage(data.burgerImage.localFile.childImageSharp)

  const bgImage = convertToBgImage(image)

  return (
    <Overlay>
    <BurgerContainer {...bgImage}>
     
        <h1>{data.burgerText}</h1>
        <p>{data.burgerSubtext}</p>
        <BurgerButton>Order Now</BurgerButton>
      
    </BurgerContainer>
    </Overlay>
  )
}

export default BurgerOfTheDay

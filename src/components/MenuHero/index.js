import React from "react"
//Styles
import { BurgerContainer, Overlay, MenuHeroH1 } from "./MenuHero.styles"
//Image plugins
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const MenuHero = ({title, childImage}) => {
  
  const image = getImage(childImage)
  const bgImage = convertToBgImage(image)

  return (
    <Overlay>
      <BurgerContainer {...bgImage}>
        <MenuHeroH1>{title}</MenuHeroH1>
      </BurgerContainer>
    </Overlay>
  )
}

export default MenuHero

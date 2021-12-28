import React from "react"
import { BurgerContainer, Overlay } from "./MenuHero.styles"
//GraphQL
import { UseMenuHeroQuery } from "../../hooks/UseMenuHeroQuery"
//Image plugins
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"

const MenuHero = ({title, childImage}) => {
  
  // const {
  //   wpPage: { title },
  //   wpPage: {
  //     featuredImage: {
  //       node: {
  //         localFile: { childImageSharp: childImage },
  //       },
  //     },
  //   },
  // } = UseMenuHeroQuery()

  // console.log(data)
  // console.log(childImage)

  const image = getImage(childImage)

  const bgImage = convertToBgImage(image)

  return (
    <Overlay>
      <BurgerContainer {...bgImage}>
        <h1>{title}</h1>
      </BurgerContainer>
    </Overlay>
  )
}

export default MenuHero

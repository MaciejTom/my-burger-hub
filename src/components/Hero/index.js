import React, { useState } from "react"
//Components
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
//Styles
import {
  Overlay,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./Hero.styles"
//GraphQL
import { useHeroQuery } from "../../hooks/UseHeroQuery"
//Image plugins
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const {
    wpPage: { ACF_Hero_Component: data },
  } = useHeroQuery()


  const image = getImage(data.heroImage.localFile.childImageSharp)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage {...bgImage} >
      <Overlay>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>{data.heroText}</HeroH1>
            <HeroP>{data.heroSubtext}</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
        </Overlay>
    </BackgroundImage>
  )
}

export default Hero

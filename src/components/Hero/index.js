import React, { useState } from "react"
//Gatsby
import { withPrefix } from "gatsby"
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
//Hooks
import { useHeroQuery } from "../../hooks/UseHeroQuery"
//Image plugins
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

const Hero = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const {
    wpPage: { ACF_Hero_Component: data },
  } = useHeroQuery()

  const image = getImage(data.heroImage.localFile.childImageSharp)

  const bgImage = convertToBgImage(image)

  const isHomePage = location?.pathname === withPrefix("/")

  if (isHomePage) {
    return (
      <BackgroundImage {...bgImage}>
        <Overlay>
          <Navbar toggle={toggle} isHomePage={isHomePage}/>
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
  } else {
    return (
      <>
        <Navbar toggle={toggle} isHomePage={isHomePage}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
      </>
    )
  }
}

export default Hero

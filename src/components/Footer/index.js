import React from "react"
//Components
import { SocialLinks } from "../SocialLinks"
//GraphQL
import { UseTitleQuery } from "../../hooks/UseTitleQuery"
import { UseSocialQuery } from "../../hooks/UseSocialQuery"

import {
  FooterContainer,
  FooterWrapper,
  SocialLogo,
  SocialIcons,
} from "./Footer.styles"

const Footer = () => {
  const {
    wp: {
      allSettings: { generalSettingsTitle: title },
    },
  } = UseTitleQuery()

  const {
    wpPage: { ACF_Social: socials },
  } = UseSocialQuery()

  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialLogo to="/">{title}</SocialLogo>
        <SocialIcons>
          <SocialLinks socials={socials} />
        </SocialIcons>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer

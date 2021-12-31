import React from "react"
//Components
import { SocialLinks } from "../SocialLinks"
//GraphQL
import { UseTitleQuery } from "../../hooks/UseTitleQuery"
import { UseSocialQuery } from "../../hooks/UseSocialQuery"

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
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
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">{title}</SocialLogo>
            <SocialIcons>
              <SocialLinks socials={socials} />
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

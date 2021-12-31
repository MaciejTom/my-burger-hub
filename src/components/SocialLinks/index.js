import React from "react"
//Icons
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"
//Styles
import { SocialIconLink } from "./SocialLinks.styles"

export const SocialLinks = ({ socials }) => {
  let socialKeys = Object.keys(socials)

  const socialLinks = (name, icon) => {
    return (
      <SocialIconLink href={socials[name]} target="_blank" aria-label={name} key={name}>
        {icon}
      </SocialIconLink>
    )
  }

  return socialKeys.map(name => {
    if (name == "facebook" && socials[name]) {
      
      return socialLinks(name, <FaFacebook />)
    }
    if (name == "twitter" && socials[name]) {
      return socialLinks(name, <FaTwitter />)
    }
    if (name == "linkedin" && socials[name]) {
      return socialLinks(name, <FaLinkedin />)
    }
    if (name == "youtube" && socials[name]) {
      return socialLinks(name, <FaYoutube />)
    }
    if (name == "instagram" && socials[name]) {
      return socialLinks(name, <FaInstagram />)
    }
  })
}

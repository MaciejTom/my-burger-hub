import React from "react"
//Components
import Footer from "../Footer"
import Hero from "../Hero"
//Styles
import { GlobalStyles } from "./Layout.styles"

const Layout = ({ children, location }) => {
  
  return (
    <>
      <GlobalStyles />
      <Hero location={location} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
//Components
import Footer from "../Footer"
import Hero from "../Hero"
//Styles
import { GlobalStyles } from "./Layout.styles"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Hero/>
      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
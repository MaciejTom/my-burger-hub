import React from "react"
import {graphql} from "gatsby"

//Components
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Products from "../components/Products"
import MenuHero from "../components/MenuHero"

//Hooks
import { UseProductsQuery } from "../hooks/UseProductsQuery"

export default function Menu({ data }) {

  const {
    allWpExtra: { nodes: extras },
    allWpBurger: { nodes: burgers },
  } = UseProductsQuery()

   const {
    wpPage: { title },
    wpPage: {
      featuredImage: {
        node: {
          localFile: { childImageSharp: childImage },
        },
      },
    },
  } = data

  return (
    <Layout>
      <SEO title="home" />
      <MenuHero title={title} childImage={childImage}/>
      <Products products={burgers} isBurger={true} full />
      <Products heading="Extras" products={extras} full />
    </Layout>
  )
}

export const query = graphql`
query menuPage {
  wpPage(title: {eq: "menu"}) {
    title
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: JPG)
          }
        }
      }
    }
  }
}

`
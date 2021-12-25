import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Products from "../components/Products"
import BurgerOfTheDay from "../components/BurgerOfTheDay"
//Hooks
import {UseProductsQuery} from "../hooks/UseProductsQuery"

export default function Home({ data }) {

  const {allWpExtra : {nodes : extras}, allWpBurger : {nodes : burgers}} = UseProductsQuery()
  const something = UseProductsQuery()
  console.log(extras)
  console.log(burgers)
  return (
    <Layout>
      <SEO title="home" />
   
      <Products heading='Choose your favorite' products={burgers} />
      <BurgerOfTheDay /> 
      <Products heading='Sweet Treats for You' products={extras} />
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query {
//     allWpPost(sort: { fields: [date] }) {
//       nodes {
//         title
//         excerpt
//         slug
//       }
//     }
//   }
// `

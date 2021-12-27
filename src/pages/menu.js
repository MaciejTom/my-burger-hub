import React from "react"
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

  return (
    <Layout>
      <SEO title="home" />
      <MenuHero />
      <Products products={burgers} isBurger={true} full />
      <Products heading="Extras" products={extras} full />
    </Layout>
  )
}

import React from "react"
//Components
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Products from "../components/Products"
import BurgerOfTheDay from "../components/BurgerOfTheDay"
import LatestBlogPost from "../components/LatestBlogPost"
//Hooks
import { UseProductsQuery } from "../hooks/UseProductsQuery"

export default function Home({ isHomePage, data, location }) {
  const {
    allWpExtra: { nodes: extras },
    allWpBurger: { nodes: burgers },
  } = UseProductsQuery()

  return (
    <Layout location={location}>
      <SEO title="home" />

      <Products
        heading="Choose your favorite"
        products={burgers}
        isBurger={true}
      />
      <BurgerOfTheDay />
      <Products heading="Extras for You" products={extras} />
      <LatestBlogPost />
    </Layout>
  )
}

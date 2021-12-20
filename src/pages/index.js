import  React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    
    <Layout>
   
      <SEO title="home" />
      <h1>INDEX</h1>
      <h4>Posts</h4>
        
    </Layout>
    
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
import React from "react"
//Gatsby
import { graphql } from "gatsby"
//Components
import Layout from "../components/layout"
import MenuHero from "../components/MenuHero"
import Posts from "../components/Posts"
import SEO from "../components/seo"

export default function Blog({ data }) {
  const {
    allWpPost: { edges: postsData },

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
      <MenuHero title={title} childImage={childImage} />
      <Posts postsData={postsData}/>      
    </Layout>
  )
}

export const query = graphql`
  query blogPage {
    wpPage(title: { eq: "blog" }) {
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
    allWpPost {
      edges {
        node {
          uri
          id
          title
          excerpt
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
    }
  }
`

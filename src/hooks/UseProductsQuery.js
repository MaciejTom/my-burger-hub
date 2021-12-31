import { useStaticQuery, graphql } from "gatsby"

export const UseProductsQuery = () => {
  const data = useStaticQuery(graphql`
query MyQuery {
  allWpExtra {
    nodes {
      id
      title
      ACF_Products {
        productIngredients
        productName
        productPrice
        productPhoto {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }
  allWpBurger {
    nodes {
      id
      title
      ACF_Products {
        productIngredients
        productName
        productPrice
        productPhoto {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }
}

  
  `)
  return data
}

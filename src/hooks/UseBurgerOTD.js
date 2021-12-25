import { useStaticQuery, graphql } from "gatsby"

export const UseBurgerOTD = () => {
  const data = useStaticQuery(graphql`
    query BurgerQuery {
      wpPage(databaseId: { eq: 40 }) {
        ACF_BurgerOfTheDay_Component {
          burgerSubtext
          burgerText
          fieldGroupName
          burgerImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)
  return data
}

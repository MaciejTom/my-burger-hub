import { useStaticQuery, graphql } from "gatsby"

export const UseMenuHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroMenuQuery {
      wpPage(databaseId: { eq: 159 }) {
        id
        title
        featuredImage {
          node {
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

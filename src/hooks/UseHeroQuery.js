import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpPage(databaseId: { eq: 40 }) {
        id
        ACF_Hero_Component {
          heroSubtext
          heroText
          heroImage {
            sourceUrl
            localFile {
              id
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  backgroundColor: "rgba(0, 0, 0, 1)"
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

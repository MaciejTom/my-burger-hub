import { useStaticQuery, graphql } from "gatsby"

export const UseSocialQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(databaseId: { eq: 40 }) {
        id
        ACF_Social {
          facebook
          instagram
          linkedin
          twitter
          youtube
        }
      }
    }
  `)
  return data
}

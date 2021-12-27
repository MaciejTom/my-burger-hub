import { useStaticQuery, graphql } from "gatsby"

export const UseLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            excerpt
            uri
          }
        }
      }
    }
  `)

  return data
}

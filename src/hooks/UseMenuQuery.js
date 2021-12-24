import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      wpMenu(name: { eq: "Main menu" }) {
        menuItems {
          nodes {
            url
            label
            parentId
            id
          }
        }
      }
      wp {
        generalSettings {
          title
        }
      }
    }
  `)
  return data
}

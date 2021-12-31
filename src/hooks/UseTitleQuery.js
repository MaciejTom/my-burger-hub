import { useStaticQuery, graphql } from "gatsby"

export const UseTitleQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        id
        allSettings {
          generalSettingsTitle
        }
      }
    }
  `)
  return data
}

import React from "react"
//Styles
import styled from "styled-components"
//Gatsby
import { graphql } from "gatsby"
import { Link } from "gatsby"
//Components
import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundContent = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  text-align: center;
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 80px - 92px);

}
@media (max-width: 820px) {
  height: calc(100vh - 80px - 122px);
}
`
const Btn = styled(Link)`
  font-size: 1rem;
  padding: 0.7rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  text-decoration: none;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />

      <NotFoundContent>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Btn to="/">Back home</Btn>
      </NotFoundContent>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from "react"
//Gatbsy
import { Link, graphql } from "gatsby"
//Image plugins
import { GatsbyImage } from "gatsby-plugin-image"
//Styles
import styled from "styled-components"

import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
// import "../css/@wordpress/block-library/build-style/style.css"
// import "../css/@wordpress/block-library/build-style/theme.css"

import MenuHero from "../components/MenuHero"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const Wrapper = styled.div`
  background: black;
  color: white;
  padding: 2rem;
`

const PostContent = styled.article`
  margin-top: 20px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 1.2rem;
  text-align: center;
`
const PostSection = styled.section`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
const PostText = styled.section`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  padding: 2rem;
  @media (max-width: 1200px) {
    padding: 0 0 2rem 0;
  }
`
const PrevNextNav = styled.nav`
  padding: clamp(1rem, 2.5vw, 4rem);
`
const NextPostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  a {
    color: white;
    text-decoration: none;
  }
`
const FeaturedImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 500px;
  flex-shrink: 0;
  box-shadow: 8px 8px #fdc500;
  border-radius: 3px 3px 35px 3px;
  @media (max-width: 1200px) {
    align-self: center;
  }
`

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }
  const backgroundImage =
    post.ACF_Blog_Post_Image.blogBackground.localFile.childImageSharp

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <MenuHero title={post.title} childImage={backgroundImage} />
      <Wrapper>
        <PostContent>
          <PostSection>
            <PostText>{parse(post.content)}</PostText>
            {/* if we have a featured image for this post let's display it */}
            {featuredImage?.data && (
              <FeaturedImage
                image={featuredImage.data}
                alt={featuredImage.alt}
              />
            )}
          </PostSection>

          <PrevNextNav>
            <NextPostList>
              <li>
                {previous && (
                  <Link to={previous.uri} rel="prev">
                    ← {previous.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.uri} rel="next">
                    {next.title} →
                  </Link>
                )}
              </li>
            </NextPostList>
          </PrevNextNav>
        </PostContent>
      </Wrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
      ACF_Blog_Post_Image {
        fieldGroupName
        blogBackground {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: JPG, placeholder: BLURRED)
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`

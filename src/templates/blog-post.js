import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import styled from "styled-components"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
// import "../css/@wordpress/block-library/build-style/style.css"
// import "../css/@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
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
  padding: 20px;
  text-align: center;
  h1 {
    font-size: clamp(2rem, 2.5vw, 3rem);
    box-shadow: 4px 6px #fdc500;
    display: inline-block;
    padding: 1rem;
  }
`
const PrevNextList = styled.nav`
  padding: 4rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    a {
      color: white;
      text-decoration: none;
    }
  }
`
const FeaturedImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 500px; 

`

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
       <Seo title={post.title} description={post.excerpt} />
      <Wrapper>
        <PostContent>
          <h1 itemProp="headline">{parse(post.title)}</h1>

          <section itemProp="articleBody">{parse(post.content)}</section>
           {/* if we have a featured image for this post let's display it */}
           {featuredImage?.data && (
             <FeaturedImage
               image={featuredImage.data}
               alt={featuredImage.alt}
              
             />
           )}
          <PrevNextList>
            <ul>
              <li>
                {previous && (
                  <Link to={previous.uri} rel="prev">
                    ← {parse(previous.title)}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.uri} rel="next">
                    {parse(next.title)} →
                  </Link>
                )}
              </li>
            </ul>
          </PrevNextList>
        </PostContent>
      </Wrapper>
    </Layout>

    // <Layout>
    //   <Seo title={post.title} description={post.excerpt} />

    //   <article
    //     className="blog-post"
    //     itemScope
    //     itemType="http://schema.org/Article"
    //   >
    //     <header>
    //       <h1 itemProp="headline">{parse(post.title)}</h1>
    //       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //       <p>{post.date}</p>

    //       {/* if we have a featured image for this post let's display it */}
    //       {featuredImage?.data && (
    //         <GatsbyImage
    //           image={featuredImage.data}
    //           alt={featuredImage.alt}
    //           style={{ marginBottom: 50 }}
    //         />
    //       )}
    //     </header>

    //     {!!post.content && (
    //       <section itemProp="articleBody">{parse(post.content)}</section>
    //     )}

    //     <hr />

    //     <footer>
    //       <Bio />
    //     </footer>
    //   </article>

    // </Layout>
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

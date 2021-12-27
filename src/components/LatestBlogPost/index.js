import React from "react"
import { Link } from "gatsby"
import { UseLatestBlogPost } from "../../hooks/UseLatestBlogPost"
import { PostContainer } from "./LatestBlogPost.styles"

const LatestBlogPost = () => {
  const data = UseLatestBlogPost()

  return (
    <PostContainer>
      <h1>Latest Blog Post</h1>
      <h4>{data.allWpPost.edges[0].node.title}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allWpPost.edges[0].node.excerpt,
        }}
      />
      <Link to={`/blog${data.allWpPost.edges[0].node.uri}`}>
        <h5>Read More</h5>
      </Link>
    </PostContainer>
  )
}

export default LatestBlogPost

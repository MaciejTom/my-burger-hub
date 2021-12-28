import React from "react"

import { UseLatestBlogPost } from "../../hooks/UseLatestBlogPost"
import { PostContainer, PostWrapper, BlogBtn } from "./LatestBlogPost.styles"

const LatestBlogPost = () => {
  const data = UseLatestBlogPost()

  return (
    
    <PostContainer>
      <PostWrapper>
      <h2>Latest Blog Post</h2>
      <h4>{data.allWpPost.edges[0].node.title}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allWpPost.edges[0].node.excerpt,
        }}
      />

      <BlogBtn to={`${data.allWpPost.edges[0].node.uri}`}>
        Read More
      </BlogBtn>
      </PostWrapper>
    </PostContainer>
  )
}

export default LatestBlogPost

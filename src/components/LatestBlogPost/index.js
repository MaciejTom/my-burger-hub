import React from "react"
//Hooks
import { UseLatestBlogPost } from "../../hooks/UseLatestBlogPost"
//Styles
import { PostContainer, PostWrapper, BlogBtn, PostH2, PostH4 } from "./LatestBlogPost.styles"

const LatestBlogPost = () => {
  const data = UseLatestBlogPost()

  return (
    
    <PostContainer>
      <PostWrapper>
      <PostH2>Latest Blog Post</PostH2>
      <PostH4>{data.allWpPost.edges[0].node.title}</PostH4>
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

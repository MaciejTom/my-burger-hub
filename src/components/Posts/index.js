import React from "react"
//Styles
import { PostsContainer, Post, Text, PostImg, BlogBtn, PostsWrapper, PostH3 } from "./Posts.styles"
//Image plugin
import { getImage } from "gatsby-plugin-image"

export const Posts = ({ postsData }) => {
  return (
   
   <PostsWrapper>
    <PostsContainer>
      {postsData.map(({ node }) => {
        
        const productImage = getImage(node.featuredImage.node.localFile)
        
        return (
          <Post key={node.id}>
            <Text>
              <PostH3>{node.title} </PostH3>
              <div
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
              <BlogBtn to={`${node.uri}`}>Read More</BlogBtn>
            </Text>
            <PostImg image={productImage} />
          </Post>
        )
      })}
    </PostsContainer>
    </PostsWrapper>
  )
}

export default Posts

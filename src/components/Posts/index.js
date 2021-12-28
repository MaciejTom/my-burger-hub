import React from "react"
//Styles
import { PostsContainer, Post, Text, PostImg, BlogBtn, PostsWrapper } from "./Posts.styles"
//Image plugin
import { getImage } from "gatsby-plugin-image"

export const Posts = ({ postsData }) => {
  return (
    //   <PostsWrap>
    <PostsWrapper>
    <PostsContainer>
      {postsData.map(({ node }) => {
        const productImage = getImage(node.featuredImage.node.localFile)
        console.log(node.uri)
        return (
          <Post key={node.id}>
            <Text>
              <h3>{node.title} </h3>
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

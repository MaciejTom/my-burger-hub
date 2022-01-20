import React from "react"
//Styles
import {
  Container,
  Post,
  Text,
  PostImg,
  BlogBtn,
  PostsWrapper,
  PostH2,
} from "./Posts.styles"
//Image plugin
import { getImage } from "gatsby-plugin-image"

export const Posts = ({ postsData }) => {
  return (
    <PostsWrapper>
      <Container>
        {postsData.map(({ node }) => {
          const productImage = getImage(node.featuredImage.node.localFile)

          return (
            <Post key={node.id}>
              <Text>
                <PostH2>{node.title} </PostH2>
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
      </Container>
    </PostsWrapper>
  )
}

export default Posts

import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const  PostsWrapper = styled.section`
  background: black;
  color: white;
`
export const Container = styled.div`
  padding: 0 1.2rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: clamp(1rem, 2.5vw, 4rem) 1rem clamp(3rem, 2.5vw, 4rem) 1rem;
`

export const PostImg = styled(GatsbyImage)`
  height: 150px;
  max-width: 230px;
  width: 100%;
  box-shadow: 8px 8px #fdc500;
  flex-shrink: 0;
  align-self: center;
`
export const BlogBtn = styled(Link)`
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  border: none;
  background: red;
  color: #fff;
  transition: 0.2s ease-out;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`

export const Post = styled.article`
  padding: 1.5rem 1rem;
  display: flex;
  background: #0d0909;
  border-radius: 2px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const Text = styled.div`
  padding: 1.8rem;
  @media (max-width: 600px) {
    text-align: center;
  }
`
export const PostH2 = styled.h2`
  font-size: clamp(1rem, 2.5vw, 1.7rem);
  margin: 0 0 1.2rem 0;
`

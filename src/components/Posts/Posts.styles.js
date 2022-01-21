import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const PostsWrapper = styled.section`
  background: black;
  color: white;
`
export const Container = styled.div`
  padding: 0 1.2em;
  max-width: 1300px;
  margin: 0 auto;
  padding: clamp(1em, 2.5vw, 4em) 1rem clamp(3em, 2.5vw, 4em) 1em;
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
  padding: 0.5em 2em;
  border: none;
  background: red;
  color: #fff;
  transition: 0.2s ease-out;
  text-decoration: none;
  margin-top: 1em;
  display: inline-block;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`

export const Post = styled.article`
  padding: 1.5em 1em;
  display: flex;
  background: #0d0909;
  border-radius: 2px;
  padding-right: 2em;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1.5em 1em 2.5em;
  }

  border-bottom: 1px #646464 solid;
  &:last-of-type {
    border-bottom: none;
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
  margin: 0 0 1.2em 0;
`

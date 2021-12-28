import styled from "styled-components"
import { Link } from "gatsby"

export const PostContainer = styled.div`
  background-color: black;
  color: white;
  padding: 3rem 2rem;

`
export const PostWrapper = styled.div`
  max-width: 1180px;
  padding: 2rem;
  margin: 0 auto;
 
  text-align: center;

  h2 {
    font-size: clamp(2rem, 2.5vw, 3rem);
    display: inline-block;
    box-shadow: 3px 5px #e9ba23;
    padding: clamp(1rem, 2.5vw, 2rem);
    margin: 0;
  }
  h4 {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
  }
`
export const BlogBtn = styled(Link)`
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  border: none;
  background: #e31837;
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

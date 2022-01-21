import styled from "styled-components"
import { Link } from "gatsby"

export const PostContainer = styled.section`
  background-color: black;
  color: white;
  padding: 3em 2em;

`
export const PostWrapper = styled.div`
  max-width: 1180px;
  padding: 2em;
  margin: 0 auto; 
  text-align: center;
`
export const PostH2 = styled.h2`
    font-size: clamp(2rem, 2.5vw, 3rem);
    display: inline-block;
    box-shadow: 3px 5px #e9ba23;
    padding: 0.5em 1em;
    margin: 0;
    border-radius: 3px 3px 35px 3px;
  
`
export const PostH3 = styled.h3`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding-bottom: 1em;
  
`
export const BlogBtn = styled(Link)`
  font-size: 1.2rem;
  padding: 0.5em 2em;
  border: none;
  background: #e31837;
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
export const Text = styled.div`
width: max(70%, 200px);
text-align: center;
margin: 0 auto;
`
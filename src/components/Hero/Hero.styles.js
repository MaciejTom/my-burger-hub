import styled from 'styled-components';
import {Link} from 'gatsby';

export const HeaderContainer = styled.header`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  padding: 0 2em;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0em calc((100vw - 1300px)/2) 2em;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  max-width: 1300px;
  /* margin: 0 auto; */
  max-width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin: 0.2em 0;
  box-shadow: 3px clamp(1px, 2.5vw, 8px) #e9ba23;
  border-radius: 3px 3px 35px 3px;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 0.8em;
  font-weight: 500;
`;

export const HeroBtn = styled(Link)`
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  padding: 1em 2em;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  text-transform: capitalize;
  font-weight: 400;
  text-decoration: none;
  

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

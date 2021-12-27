import React from 'react';
import { Nav, NavIcon, NavLink, Bars } from './Navbar.styles';

const Navbar = ({ toggle, isHomePage }) => {
  console.log(isHomePage)
  return (
    <>
      <Nav isHomePage={isHomePage}>
        <NavLink to='/'>Burger</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;

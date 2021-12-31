import React from 'react';
//Styles
import { Nav, NavIcon, NavLink, Bars, NavbarP } from './Navbar.styles';
//Hooks
import {UseTitleQuery} from '../../hooks/UseTitleQuery'

const Navbar = ({ toggle, isHomePage }) => {
 
const {wp: {allSettings: {generalSettingsTitle: title}}} = UseTitleQuery();

  return (
    <>
      <Nav isHomePage={isHomePage}>
        <NavLink to='/'>{title}</NavLink>
        <NavIcon onClick={toggle}>
          <NavbarP>Menu</NavbarP>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;

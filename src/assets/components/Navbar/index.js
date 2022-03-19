import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Navlogo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activestyle>
            Home
          </NavLink>
          <NavLink to='/about' activestyle>
            About
          </NavLink>
          <NavLink to='/services' activestyle>
            Services
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./Navbar";


const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLink to="/">
          <h1>dodo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to="/skills" activeStyle>
            Skills
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/experience" activeStyle>
            Experience
          </NavLink>
          <NavLink to="/hobbies" activeStyle>
            Hobbies
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

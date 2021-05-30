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
        <NavLink to="/skills">
            Skills
          </NavLink>
          <NavLink to="/projects">
            Projects
          </NavLink>
          <NavLink to="/experience">
            Experience
          </NavLink>
          <NavLink to="/hobbies">
            Hobbies
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

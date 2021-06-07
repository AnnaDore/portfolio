import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./Navbar";
import { SidebarData } from "./SidebarData"
import * as AiIcons from "react-icons/ai"

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h2>dodo</h2>
        </NavLink>
        <Bars onClick={showSidebar} />
        <NavMenu>
        <AiIcons.AiOutlineClose />
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/hobbies">Hobbies</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;

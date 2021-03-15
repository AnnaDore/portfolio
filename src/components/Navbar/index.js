import React from "react";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>dodo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <Navlink to="/skills" activeStyle>
            Skills
          </Navlink>
          <Navlink to="/projects" activeStyle>
            Projects
          </Navlink>
          <Navlink to="/experience" activeStyle>
            Experience
          </Navlink>
          <Navlink to="/hobbies" activeStyle>
            Hobbies
          </Navlink>
          <Navlink to="/contact" activeStyle>
            Contact
          </Navlink>
        </NavMenu>
        <NavBtn>
            
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

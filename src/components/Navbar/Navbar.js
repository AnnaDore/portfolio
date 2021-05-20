import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #5b5e6d;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2)
  z-index: 10
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  aligh-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

   @media screen and (max-width: 768px) {
     display: none;
   }
`

export const  NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s else-in-out;


  &:hover {
    transition: all 0.2s else-in-out;
    background: #fff;
    color: #010606;
  }
`





// import React, { useEffect } from "react";
// import "./Navbar.scss"

// export default function Navbar() {

//   return (
//     <div></div>
//   );
// }

{
  /* <header>
<div class="logo">dodo</div>
<div class="container">
  <div></div>
  <div></div>
  <div></div>
</div>
<div class="nav">
  <ul>
    <a>Skills</a>
    <a>Experience</a>
    <a>Projects</a>
    <a>Hobbies</a>
    <a>Contact</a>
  </ul>
</div>
</header> */
}

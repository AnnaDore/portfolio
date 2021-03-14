import React, { useEffect } from "react";
import "./Navbar.scss"

export default function Navbar() {


  return (
    <header>
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
          <a>Contact</a>
        </ul>
      </div>
    </header>
  );
}

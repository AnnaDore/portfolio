import React from "react";
import "./header.scss"

export default function Header() {
  return (
    <header>
      <div class="logo">Ann Do</div>
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

import React from "react";
import "./Intro.scss"

export default function Intro() {
  return (
    <div
      style={{
        backgroundImage: "url(/img/intro.jpg",
        alt: "sea",
        backgroundSize: "cover",
        width: "100%",
        height: 800,
        padding: "9em",
       // textAlign: "center",
      }}
    >
      <div className="dev-name">
        <h1>Anna Dorenskaia</h1>
        <h3>Portfolio</h3>
      </div>
    </div>
  );
}

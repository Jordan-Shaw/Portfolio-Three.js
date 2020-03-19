import React from "react";
import bg from "../assets/bg.svg";

export default function Header() {
  return (
    <div>
      <img src={bg} alt="bg-img" className="background" />
      <div className="header">
        <h1 id="forename">Jordan</h1>
        <h1 id="surname">Shaw</h1>
        <h3 id="jobTitle">Fullstack Developer</h3>
      </div>
    </div>
  );
}

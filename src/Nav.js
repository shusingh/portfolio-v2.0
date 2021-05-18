import React from "react";

function Nav() {
  return (
    <div className="nav_wrapper">
      <div className="nav">
        <a aria-current="page" href="/" className="logo">
          shubham
        </a>
        <div className="nav_buttons">
          <a href="/">Projects</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;

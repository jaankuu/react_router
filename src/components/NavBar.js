import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink exact activeStyle={{fontWweight: "bold"}} to="/" style={{ margin: 20 }}>
        Home
      </NavLink>
      {" - "}
      <NavLink exact activeStyle={{fontWweight: "bold"}} to="/about" style={{ margin: 20 }}>About</NavLink>
      {" - "}
      <NavLink exact activeStyle={{fontWweight: "bold"}} to="/discover" style={{ margin: 20 }}>Discover</NavLink>
    </div>
  );
}
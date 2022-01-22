import React from "react";
import { NavLink } from ".";

export default function SiteTopNav() {
  return (
    <div className="flex items-center">
      <nav className="flex space-x-4">
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/login">SIGN IN</NavLink>
        <NavLink to="/shipping">SCHEDULE PICKUP</NavLink>
        <NavLink to="/profile">PROFILE</NavLink>
        <NavLink to="/register">SIGN UP</NavLink>
        <NavLink to="/cart">CART</NavLink>
      </nav>
    </div>
  );
}

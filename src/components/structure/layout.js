import React from "react";
import PropTypes from "prop-types";
import eaziwash_logo from "../../assets/eaziwash-logo.png";
import { NavLink } from "../navigation";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full h-screen space-y-4">
      <div className="border-b-2 w-2/3 p-4 flex justify-between">
        <div>
          <div className="w-20">
            <NavLink to="/">
              <img src={eaziwash_logo} alt="logo not available" />
            </NavLink>
          </div>
        </div>
        <div className="flex items-center">
          <nav className="flex space-x-4">
            <NavLink to="/shipping">SCHEDULE PICKUP</NavLink>
            <NavLink to="/profile">PROFILE</NavLink>
            <NavLink to="/register">SIGN UP</NavLink>
          </nav>
        </div>
      </div>

      {children}

      <div>Footer here</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

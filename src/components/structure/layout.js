import React from "react";
import PropTypes from "prop-types";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import eaziwash_logo from "../../assets/eaziwash-logo.png";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="bg-blue-100 w-2/3 p-4 flex justify-between">
        <div>
          <div className="w-20">
            <CustomLink to="/">
              <img src={eaziwash_logo} alt="logo not available" />
            </CustomLink>
          </div>
        </div>
        <div className="flex items-center">
          <nav className="flex space-x-4">
            <CustomLink to="/schedule-pickup">SCHEDULE PICKUP</CustomLink>
            <CustomLink to="/my-account">MY ACCOUNT</CustomLink>
            <CustomLink to="/register">SIGN UP</CustomLink>
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

function CustomLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={match ? "underline text-blue-500" : "none"}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

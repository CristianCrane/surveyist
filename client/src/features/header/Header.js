import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../auth/authSlice";
import Payments from "../stripe_checkout/Payments";

const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <Logo />
      <MenuItems />
    </nav>
  );
};

const Logo = () => {
  const user = useSelector(selectUser);

  return (
    <div className="navbar-brand">
      <Link className="navbar-item" to={user ? "/surveys" : "/"}>
        <img src="/surveyist-logo.png" width="150" height="35" />
      </Link>
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  );
};

const MenuItems = () => {
  const user = useSelector(selectUser);

  if (user === null) {
    return ""; // user not loaded yet
  }

  return (
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {user && <Payments />}
            {user && (
              <a href="/api/logout" className="button">
                Logout
              </a>
            )}
            {!user && (
              <a href="/auth/google" className="button">
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

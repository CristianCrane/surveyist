import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { selectUser } from "../auth/authSlice";
import Payments from "../stripe_checkout/Payments";
import PropTypes from "prop-types";

const MenuItems = ({ user }) => {
  switch (user) {
    case null:
      return "";
    case false:
      return (
        <li>
          <a href="/auth/google">Login</a>
        </li>
      );
    default:
      return [
        <li key={1}>
          <Payments />
        </li>,
        <li key={2}>
          <a href="/api/logout">Logout</a>
        </li>,
      ];
  }
};

MenuItems.propTypes = {
  user: PropTypes.object,
};

export default function Header() {
  const user = useSelector(selectUser);
  return (
    <>
      <nav>
        <div className="row">
          <div className="col s12">
            <div className="nav-wrapper">
              <Link className="left brand-logo" to={user ? "/surveys" : "/"}>
                Surveyist
              </Link>
              <ul className="right">
                <MenuItems user={user} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

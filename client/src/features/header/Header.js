import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { createSurvey, selectUser } from "../auth/authSlice";
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
        <li key={3} style={{ margin: "0 10px" }}>
          Credits: {user.credits}
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
  const dispatch = useDispatch();
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
                <li onClick={() => dispatch(createSurvey())}>test!</li>
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

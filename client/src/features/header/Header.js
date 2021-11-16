import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectUser } from '../auth/authSlice';
import Payments from '../stripe_checkout/Payments';

const LoginButton = ({ user }) => {
  switch (user) {
    case null:
      return '';
    case false:
      return <li><a href='/auth/google'>Login</a></li>;
    default:
      return [
        <li><Payments /></li>,
        <li><a href='/api/logout'>Logout</a></li>,
      ];
  }
}

export default function Header(props) {
  const user = useSelector(selectUser);
  return (
    <>
      <nav>
        <div className='row'>
          <div className='col s12'>
            <div className='nav-wrapper'>
              <Link className='left brand-logo' to={user ? '/surveys' : '/'}>Surveyist</Link>
              <ul className='right'>
                <LoginButton user={user} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

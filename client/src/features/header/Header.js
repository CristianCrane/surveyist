import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectUser } from '../../features/auth/authSlice';

const LoginButton = ({ user }) => {
  switch (user) {
    case null:
      return '';
    case false:
      return <li><a href='/auth/google'>Login</a></li>;
    default:
      return <li><a href='/api/logout'>Logout</a></li>;
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
              <a href='/' className='left brand-logo'>Surveyist</a>
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

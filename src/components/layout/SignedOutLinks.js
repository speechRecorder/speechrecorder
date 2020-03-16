import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">
          <i className="material-icons left">account_circle</i>
          <b>Sign Up</b>
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin">
          <i className="material-icons left">input</i>
          <b>Log In</b>
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green lighten-1">
          <b>CB</b>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;

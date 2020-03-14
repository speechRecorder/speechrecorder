import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({signOut, profile}) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createtodo">New ToDo</NavLink>
      </li>
      <li>
        <a href="/" onClick={signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);

import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut, profile }) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createtodo">
          <i className="material-icons left">add_circle_outline</i>
          <b>New ToDo</b>
        </NavLink>
      </li>
      <li>
        <a href="/" onClick={signOut}>
          <i className="material-icons left">input</i>
          <b>Log Out</b>
        </a>
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

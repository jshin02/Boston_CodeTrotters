import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const AuthenticatedOptions = ({ close }) => (
  <div className="menu">
    <ul>
      <li>
        <NavLink onClick={close} activeClassName='current' to="update-profile">Edit Profile</NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName='current' to="ManageSongs">Manage Songs</NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName='current' to="change-password">Change Password</NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName='current' to="sign-out">Sign Out</NavLink>
      </li>
    </ul>
  </div>
)

const Menu = ({ close, user }) => (
  <Fragment>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavLink onClick={close} activeClassName='current' to="/">Home</NavLink>
      {user && <AuthenticatedOptions close={close} />}
    </div>
  </Fragment>
)

export default Menu

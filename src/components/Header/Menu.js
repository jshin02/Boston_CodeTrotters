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
    </ul>
  </div>
)

const Menu = ({ close, user }) => (
  <Fragment>
    <div className="menu" style={{ display: 'flex', flexDirection: 'column' }}>
      <ul>
        <li>
          <NavLink onClick={close} activeClassName='current' to="/">Home</NavLink>
          {user && <AuthenticatedOptions close={close} />}
        </li>
      </ul>
    </div>
  </Fragment>
)

export default Menu

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const AuthenticatedOptions = ({ close }) => (
  <Fragment>
    {console.log('this is the close', { close })}
    <NavLink onClick={close} activeClassName='current' to="update-profile">Edit Profile</NavLink>
    <NavLink onClick={close} activeClassName='current' to="change-password">Change Password</NavLink>
    <NavLink onClick={close} activeClassName='current' to="sign-out">Sign Out</NavLink>
  </Fragment>
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

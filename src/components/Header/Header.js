import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <NavLink to="/sign-out" activeClassName='current' className='nav-links'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to="/sign-up" activeClassName='current' className='nav-links'>Sign Up</NavLink>
    <NavLink to="/sign-in" activeClassName='current' className='nav-links'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to="/" activeClassName='current' className='nav-links'>Home</NavLink>
    <NavLink to="/about" activeClassName='current' className='nav-links'>About</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <div className="navbar">
    <NavLink to="/" className="logo">
      CodeTrotters 2020
    </NavLink>
    <nav className="#">
      { user && <span className="navbar-text mr-2">Welcome, {user.name}</span>}
      { alwaysOptions }
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </div>
)

export default Header

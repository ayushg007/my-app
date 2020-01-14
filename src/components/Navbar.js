import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
      <Link className="brand-logo" to="/">Interview App</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/addnew'>Add New</NavLink></li> 
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)
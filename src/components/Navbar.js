import React from 'react';
import {Link,NavLink, } from 'react-router-dom';



const Navbar = (props) => {
	return(


	<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <h3 className="navbar-brand" >React Js</h3>
    <button className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item nav-link active">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item nav-link">
        <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item nav-link">
      <NavLink to="/contact">Contact</NavLink>
        </li>
				<li className="nav-item nav-link">
      <NavLink to="/friends">Friends</NavLink>
        </li>
				<li className="nav-item nav-link">
      <NavLink to="/search">Search</NavLink>
        </li>
				<li className="nav-item nav-link">
        <NavLink to="/todo">Todo</NavLink>
        </li>
				<li className="nav-item nav-link">
        <NavLink to="/listshow">ListShow</NavLink>
        </li>



      </ul>
    </div>
  </div>
</nav>

	)
}

export default Navbar;

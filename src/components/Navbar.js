import React from 'react'
import "./navbar.css"
import logo from './logo.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg  navbar-light bg-dark">
        <div className="container">
        <a className="navbar-brand" href="#" ><img className="logo" src={logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle-navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              < a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              < a className="nav-link" href="/">service</a>
            </li>
            <li className="nav-item">
              < a className="nav-link" href="/">protfolio</a>
            </li>
            <li className="nav-item">
              < Link className="nav-link" to="/">contact</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
};

export default Navbar;
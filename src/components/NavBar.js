
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
      <nav>
        {/* <NavLink to="/" className="brand-logo">Pet Shop</NavLink> */}
        <ul> 
            <li><NavLink to="/">Landing Page</NavLink></li>
            <li><NavLink to="/game">Game Page</NavLink></li>
            <li><NavLink to="/scores">Scores Page</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
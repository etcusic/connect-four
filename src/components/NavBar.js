
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="yellow darken-2">
        <div className="right">
          <NavLink to="/" className="navlinks">-- Home Page -</NavLink>
          <NavLink to="/game" className="navlinks">- Game Page -</NavLink>
          <NavLink to="/scores" className="navlinks">- Scores Page --</NavLink>
        </div>
        
      </nav>
    )
  }
}

export default NavBar
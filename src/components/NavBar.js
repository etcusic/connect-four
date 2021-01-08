
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/">Landing Page</NavLink>
        <NavLink to="/game">Game Page</NavLink>
        <NavLink to="/scores">Scores Page</NavLink>
      </nav>
    )
  }
}

export default NavBar
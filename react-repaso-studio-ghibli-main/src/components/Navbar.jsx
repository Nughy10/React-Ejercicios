import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
        <NavLink to='' activeclassname={"active"}>Home</NavLink>
        <NavLink to='movies' activeclassname={"active"}>Movies</NavLink>
        <NavLink to='people' activeclassname={"active"}>People</NavLink>
    </header>
  )
}

export default Navbar
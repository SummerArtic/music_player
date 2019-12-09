import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav>
      <div className={classes.Logo}></div>
      <ul className={classes.Navbar}>
        <li><Link to='/music_player'><span className='RedSpan'>Music Player</span></Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#info'>Info</a></li>
      </ul>
    </nav>
  )
}


export default Navbar;
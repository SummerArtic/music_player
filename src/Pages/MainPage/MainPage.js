import React, { Component } from 'react';
import { Link } from 'react-route-dom';
import './App.css';

class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>

        <Link to='/'>Home</Link>
        <Link to='/music_player'>Music Player</Link>
      </div>
    );
  }

}

export default MainPage;

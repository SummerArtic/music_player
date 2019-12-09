import React, { Component } from 'react';
import { Link } from 'react-route-dom';
import './App.css';

class MusicPlayer extends Component {
  render() {
    return (
      <div className='MusicPlayer'>

        <Link to='/music_player'><span className='redSpan'>FREEDOM</span>MUSIC</Link>
      </div>
    );
  }

}

export default MusicPlayer;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MusicPlayer extends Component {
  render() {
    return (
      <div className='MusicPlayer'>

        <Link to='/'><span className='RedSpan'>FREEDOM</span>MUSIC</Link>
      </div>
    );
  }

}

export default MusicPlayer;

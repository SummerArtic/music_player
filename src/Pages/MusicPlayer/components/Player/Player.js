import React from 'react';
import styled from 'styled-components';

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";


const Player = (props) => {
  return (
    <Music>
      <ReactJkMusicPlayer />
    </Music >
  )
}

const Music = styled.div`
  
`;


export default Player;
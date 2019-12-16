import React, { Component } from 'react';
import styled from 'styled-components';

// Page's parts
import LeftBar from './components/LeftBar/LeftBar';
import CenterPart from './components/CenterPart/CenterPart';
import RightBar from './components/RightBar/RightBar';
import Player from './components/Player/Player';

class MusicPlayer extends Component {
  render() {
    return (
      <PlayerPage>
        <MusicPlayerGrid>
          <LeftBar />
          <CenterPart />
          <RightBar />
        </MusicPlayerGrid>
        <Player />
      </PlayerPage>

    );
  }

}

const PlayerPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MusicPlayerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;

  @media (max-width: 950px) {
    grid-template-columns: 1fr 2fr;
  }
`;
export default MusicPlayer;

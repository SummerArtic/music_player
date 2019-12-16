import React from 'react';
import styled from 'styled-components';
import Playlists from './Playlists/Playlists';

const RightBar = (props) => {
  return (
    <Right>
      <EmptyBlock />
      <Playlists />
    </Right >
  )
}

const Right = styled.div`
  
`;

const EmptyBlock = styled.div`
  position: sticky;
  top: 0;
  min-height: 80px;
  background-color: #000;
`

export default RightBar;
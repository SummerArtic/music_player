import React from 'react';
import styled from 'styled-components';

const PlaylistsItem = (props) => {
  return (
    <Playlist>
      <ListItem>{props.children}</ListItem>
    </Playlist>
  )
}


const Playlist = styled.li`
  margin: 2rem 1.7rem;
  list-style: none;
  color: #fff;
  border: none;

  $:hover {
    
  }
`
const ListItem = styled.li`
  margin: 2rem 1.7rem;
  list-style: none;
  color: #fff;
`

export default PlaylistsItem;
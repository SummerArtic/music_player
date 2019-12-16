import React from 'react';
import styled from 'styled-components';

const PlaylistsItem = (props) => {
  return (
    <Playlist>
      <ListButton ><ListItem></ListItem>{props.children}</ListButton>
    </Playlist>
  )
}


const Playlist = styled.li`
  margin: 2rem 1.7rem;
  list-style: none;
  color: #fff;
  border: none; 
  padding-left: 1.5rem; 
`
const ListItem = styled.ul`
  list-style: none;
  color: #fff;
  
  }
`
const ListButton = styled.button`
  border: none;
  color: #fff;
  background-color: inherit;
  cursor: pointer
`


export default PlaylistsItem;
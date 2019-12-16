import React, { Component } from 'react';
import styled from 'styled-components';

import Category from '../../Common/Category';
import PlaylistsItem from './PlaylistItem';

class Playlists extends Component {
  state = {
    playlists: {
      title: 'RHCP',
      tracks: ['Snow (Hey, yo..)', 'Californication']
    },

    show: false
  }

  render() {
    return (
      <PlaylistsSection>
        <Category classFontAwesome="far fa-list-alt fa-lg">Playlists</Category>
        <PlaylistBlockUL>
          <PlaylistsItem songs={this.state.playlists.tracks}>
            {this.state.playlists.title}
          </PlaylistsItem>
        </PlaylistBlockUL>
      </PlaylistsSection>
    )
  }
}

const PlaylistsSection = styled.div`
  color: #fff;
`

const PlaylistBlockUL = styled.ul`
  list-style: none;
  color: #fff;
`

export default Playlists;
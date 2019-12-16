import React from 'react';
import styled from 'styled-components';

import User from './User';

// Images
import Frozen from '../../../../img/Player/frozen.png';
import TopArt from '../../../../img/Player/topArtist.png';
import Dragons from '../../../../img/Player/imagineDragon.png';




const CenterPart = (props) => {
  return (
    <Center>
      <HeaderWrapper>
        <User />
        <Search>
          <SearchInput type="text" placeholder="Enter track name"></SearchInput>
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-search fa-stack-1x fa-inverse" style={{ backgroundColor: '#f23005', border: '1px solid #fff', borderRadius: '50%' }}></i>
          </span></Search>
      </HeaderWrapper>
      <AlbumsCovers>
        <TopArtist src={TopArt} />
        <Album src={Frozen}
          width="300" height="300" />
        <Album src={Frozen}
          width="300" height="300" />
        <Album src={Frozen}
          width="300" height="300" />
        <Album src={Frozen}
          width="300" height="300" />
        <Album src={Dragons}
          width="300" height="300" />
        <Album src={Dragons}
          width="300" height="300" />
        <Album src={Dragons}
          width="300" height="300" />
        <Album src={Dragons}
          width="300" height="300" />

      </AlbumsCovers>
    </Center >
  )
}

const Center = styled.div`  
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  min-height: 80px;
  width: 100%;  
  margin-bottom: 1rem;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  flex: 3;
`;

const Search = styled.div`
  background-color: #f23005;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

const SearchInput = styled.input`
  color: #fff;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  padding: 0.5rem;
  width: 70%;

  ::placeholder {
    color: #fff;
`;

const AlbumsCovers = styled.div`
  overflow: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const TopArtist = styled.img`
  width: 100%;
  height: auto;
  grid-column: 1/4;
`;
const Album = styled.img`
  width: 100%;
  height: 300px;
`;

export default CenterPart;
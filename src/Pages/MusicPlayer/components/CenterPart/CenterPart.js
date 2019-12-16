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
      <Par>TOP ARTIST OF THIS WEEK</Par>
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

const Par = styled.p`
    color: #fff;
    margin: 1rem 0;
`

const AlbumsCovers = styled.div`
  overflow: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
    padding-right: 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const TopArtist = styled.img`
  width: 100%;
  height: auto;
  grid-column: 1/4;

  @media (max-width: 950px) {
    grid-column: 1/3;
  }
  @media (max-width: 600px) {
    grid-column: 1/2;
  }
`;
const Album = styled.img`
  width: 100%;
  height: 300px;

  @media (max-width: 950px) {
    height: 150px;
    width: 100%;
  }
`;

export default CenterPart;
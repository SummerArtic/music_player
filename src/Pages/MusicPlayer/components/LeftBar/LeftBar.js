import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Category from '../Common/Category';

const LeftBar = (props) => {
  return (
    <Left>
      <HomeLink>
        <Link to='/'><span className='RedSpan'>FREEDOM</span>MUSIC</Link>
      </HomeLink>
      <Category classFontAwesome="fas fa-microphone fa-lg">Top Songs</Category>
      <Category classFontAwesome="fas fa-music fa-lg">Recomended</Category>
      <Category classFontAwesome="fas fa-heart fa-lg">Most Heard</Category>
      <Category classFontAwesome="fas fa-hand-rock fa-lg">Song Of The Day</Category>
      <Category classFontAwesome="fas fa-random fa-lg">Random Song</Category>
      <Category classFontAwesome="fas fa-users fa-lg">Communities</Category>
      <Category classFontAwesome="fas fa-broadcast-tower fa-lg">Radio</Category>
    </Left >
  )
}

const Left = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


const HomeLink = styled.div`
  max-height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  background-color: #000;
  padding: 0 1.5rem;

  & > a { 
    font-size: 24px;
  }
`;

export default LeftBar;
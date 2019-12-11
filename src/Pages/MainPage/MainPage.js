import React, { Component } from 'react';
import styled from 'styled-components';

import BlackBlure from '../../img/darkener.png';

// Page's parts
import Showcase from './components/Showcase/Showcase';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';



class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <Showcase />
        <Darkener />
        <Article />
        <Footer />
      </div>
    );
  }

}


const Darkener = styled.div`
  background: url(${BlackBlure}) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  top: -5rem;
  margin-bottom: -8rem;
  margin-top: 0;
  left: 0;
  height: 150px;
  width: 100%;
  opacity: 0.98;
  z-index: 5;
`

export default MainPage;

import React, { Component } from 'react';

// Page's parts
import Showcase from './components/Showcase/Showcase';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';



class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <Showcase />
        <Article />
        <Footer />
      </div>
    );
  }

}

export default MainPage;

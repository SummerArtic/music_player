import React from 'react';
import styled from 'styled-components';
import About from './Sections/About';
import Statistic from './Sections/Statistic/Statistic';
import Info from './Sections/Info';

const Article = (props) => {
  return (
    <MainArticle>
      <About />
      <Statistic />
      <Info />
    </MainArticle>
  )
}

const MainArticle = styled.article`
  position: relative;
  z-index: 10;
  background-color: #000000;
`;

export default Article;
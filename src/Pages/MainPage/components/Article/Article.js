import React from 'react';
import styled from 'styled-components';
import About from './Sections/About';
import StatisticPage from './Sections/Statistic/StatisticPage';
import Info from './Sections/Info';

const Article = (props) => {
  return (
    <MainArticle>
      <About />
      <StatisticPage />
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
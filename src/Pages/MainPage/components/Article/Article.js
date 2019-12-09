import React from 'react';
import About from './Sections/About';
import Statistic from './Sections/Statistic'
import Info from './Sections/Info';

const Article = (props) => {
  return (
    <article>
      <About />
      <Statistic />
      <Info />
    </article>
  )
}

export default Article;
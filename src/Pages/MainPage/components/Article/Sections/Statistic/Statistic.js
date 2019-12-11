import React from 'react';
import styled from 'styled-components';
import StatBlock from './StatBlock';

const Statistic = (props) => {
  return (
    <StatisticFlex>
      <StatBlock number={'35842'} title={'Free Tracks'}></StatBlock>
    </StatisticFlex>
  )
}

const StatisticFlex = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
  width: 100%;
  background-color: #f23005;
`;

export default Statistic;
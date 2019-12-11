import React from 'react';
import styled from 'styled-components';
import StatBlock from './StatBlock';

const Statistic = (props) => {
  return (
    <StatisticFlex>
      <StatBlock number={'35842'} title={'Free Tracks'}></StatBlock>
      <StatBlock number={'2689'} title={'Albums'}></StatBlock>
      <StatBlock number={'120'} title={'Users Today'}></StatBlock>
      <StatBlock number={'9625'} title={'Users Total'}></StatBlock>
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

  @media (max-width: 800px) {
    flex-wrap: wrap;
    height: 100%;

    & > div {
      flex: 1 1 50%;
    }
  }

  @media (max-width: 400px) {
    & > div {
      flex: 1 1 100%;
      border-bottom: 1px solid black;
      padding-bottom: 1rem;
    }
  }
`;

export default Statistic;
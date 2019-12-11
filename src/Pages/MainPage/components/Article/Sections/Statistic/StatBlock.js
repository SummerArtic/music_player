import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../../Common/Paragraph';

const StatBlock = (props) => {
  return (
    <StatisticBlock>
      <StatHeader>{props.number}</StatHeader>
      <Paragraph>{props.title}</Paragraph>
    </StatisticBlock>
  )
}

const StatisticBlock = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: #c42400;
  }
`;

const StatHeader = styled.h3`
  display: inline-block;
  font-size: 64px;
  line-height: 18px;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  margin: 2rem;

  @media (max-width: 800px) {
    font-size: 42px;
    line-height: 16px;
  }

  @media (max-width: 400px) {
    font-size: 36px;
    line-height: 14px;
  }
`;

export default StatBlock;
import React from 'react';
import styled from 'styled-components'

const Container = (props) => {
  return (
    <FlexContainer paddingTop={props.paddingTop}>{props.children}</FlexContainer>
  )
}

const FlexContainer = styled.div`
  width: 700px;
  padding-top: ${props => props.paddingTop ? props.paddingTop : '0'};
  margin-right: 40%;
  margin-left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  
  @media (max-width: 1200px) {
    max-width: 80%;
    margin: auto;
    justify-content: center;
    align-items: flex-end;
  }

  @media (max-width: 400px) {
    padding-top: 3rem;
  }
`

export default Container;
import React from 'react';
import styled from 'styled-components';


const ContainerPaddingLeft = (props) => {
  return (
    <Container>{props.children}</Container>
  )
}

const Container = styled.div`
  padding: 1rem 1rem 1rem 2rem;
  text-align: left;
  min-width: 300px;
  color: #fff;
`;

export default ContainerPaddingLeft;
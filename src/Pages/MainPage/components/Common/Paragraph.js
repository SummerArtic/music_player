import React from 'react';
import styled from 'styled-components'

const Paragraph = (props) => {
  return (
    <P>{props.children}</P>
  )
}

const P = styled.p`
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    text-align: justify;
    margin-top: 1rem;

    @media (max-width: 800px) { 
      margin: 1.5rem 0;
    }
`


export default Paragraph;
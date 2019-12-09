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
`


export default Paragraph;
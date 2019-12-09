import React from 'react';
import styled from 'styled-components'

const Button = (props) => {
  return (
    <CommonButton>{props.children}</CommonButton>
  )
}

const CommonButton = styled.button`
    display: inline-block;
    padding: 1rem 1.5rem;
    color: #fff;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    
    &:hover {
      opacity: 0.7;
      color: #f23005;
    }
`


export default Button;
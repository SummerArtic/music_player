import React from 'react';
import styled from 'styled-components'

const buttonThemes = {
  white: {
    color: '#f23005',
    bgColor: 'transparent',
    border: '2px solid #fff'
  },
  red: {
    color: '#fff',
    bgColor: '#f23005',
    border: '2px solid #f23005',
  }
};

const Button = ({
  color,
  children
}) => {
  return (
    <StyledButton color={buttonThemes[color]}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
  display: inline-block;
  padding: 1rem 3rem;
  margin-left: 1.5rem;
  color: ${props => props.color.color};
  text-transform: uppercase;
  background-color: ${props => props.color.bgColor};
  border: ${props => props.color.border}

  
  &:hover {
    opacity: 0.7;
    background-color: #fff;
    border: 2px solid #fff;
    a {
      color: #f23005;
    }
  }

  @media (max-width: 800px) {
    padding: 0.5rem 1rem;
    margin-top: 2rem;
  }

`

export default Button;
import React from 'react';
import styled from 'styled-components'
import Navbar from '../Navbar';


const Footer = (props) => {
  return (
    <FootBar>
      <Navbar />
    </FootBar>
  )
}

const FootBar = styled.footer`
  width: 40%;
  margin: auto;
  text-align: center;

  @media (max-width: 800px) {
    width: 70%;
  }

  @media (max-width: 400px) {
    width: 80%;
  }
`

export default Footer;
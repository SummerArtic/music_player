import React from 'react';
import styled from 'styled-components'

const HeaderRed = (props) => {
  return (
    <HRed>{props.children}</HRed>
  )
}

const HRed = styled.h3`
  font-weight: 700;
  color: #fff;
  font-size: 18px;
  width: 120px;
  height: 110px;
  background-color: #f23005;
  text-align: center;
  padding-top: 1rem;
  margin-top: 1rem;
`


export default HeaderRed;
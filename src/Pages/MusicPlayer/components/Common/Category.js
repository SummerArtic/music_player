import React from 'react';
import styled from 'styled-components';

const Category = (props) => {
  return (
    <Categ>
      <span className='RedSpan'><FontAwesomeIcon className={props.classFontAwesome}></FontAwesomeIcon></span>
      <Par>{props.children}</Par>
    </Categ>
  )
}

const Categ = styled.div`
  margin: 2rem 1.7rem;
  display: flex;
`;

const Par = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  text-transform: uppercase;
  display: inline-block;
`;

const FontAwesomeIcon = styled.i`
margin-right: 1rem;
width: 25px;
text-align: center
`;

export default Category;
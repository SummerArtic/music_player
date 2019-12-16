import React from 'react';
import styled from 'styled-components';

import AvatarImg from '../../../../img/Player/userAvatar.png';


const User = (props) => {
  return (
    <UserData>
      <Avatar />
      <Data>
        <Name>Oliver Bone</Name>
        <DaysFromRegister><span className='RedSpan'>296 days</span></DaysFromRegister>
      </Data>

    </UserData>
  )
}

const UserData = styled.div`
  flex: 2;
  display: flex;

  @media (max-width: 950px) {
    flex: 1;
  }
`;

const Avatar = styled.div`
  background: url(${AvatarImg}) no-repeat center center;
  background-size: 100% 100% cover;
  height: 100%;
  width: 80px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 1rem;
`;

const Name = styled.div`
  color: #ffffff;
`;

const DaysFromRegister = styled.div`
`;




export default User;
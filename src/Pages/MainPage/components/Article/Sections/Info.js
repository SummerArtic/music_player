import React from 'react';
import styled from 'styled-components';
import BackGuitar from '../../../../../img/Page/info_guitar.png';
import Paragraph from '../../Common/Paragraph';
import Container from '../../Common/Container';

const Info = (props) => {
  return (
    <InfoSection id='info'>
      <Overlay>
        <Container paddingTop={'10rem'}>
          <Header>Lorem ipsum dolor sit amet</Header>
          <Paragraph> Consectetur adipiscing elit. Pellentesque condimentum, tortor convallis eleifend dapibus, quam sem commodo lorem, vitae suscipit sapien purus dignissim orci. Ut vulputate scelerisque sapien tempor dignissim. Vivamus accumsan condimentum rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor lectus et nibh tincidunt, et dignissim lectus scelerisque. Maecenas tincidunt fermentum tristique. Duis sem odio, porttitor id sapien ullamcorper, sagittis hendrerit tortor. Nam aliquam posuere facilisis. Duis ornare sem tellus, in sagittis augue rutrum id.</Paragraph>
        </Container>
      </Overlay>
    </InfoSection>
  )
}

const InfoSection = styled.section`
  background: #0A0A0A url(${BackGuitar})no-repeat right center/contain;
  position: relative;
  width: 100%;
  height: 500px;
  
  @media (max-width: 800px) {
    background-size: cover;
    height: 400px;
  }
`;

const Header = styled.h3`
  font-weight: 700;
  color: #fff;
  font-size: 18px;
  text-align: right;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`

export default Info;
import React from 'react';
import Paragraph from '../../Common/Paragraph';
import HeaderRed from '../../Common/HeaderRed';
import styled from 'styled-components';
import BackgroundImage from '../../../../../img/laptop.png';


const About = (props) => {
  return (
    <AboutFlex id='about'>
      <FlexItem1>
        <TextPartFlex>
          <HeaderRed>About Us</HeaderRed>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum, tortor convallis eleifend dapibus, quam sem commodo lorem, vitae suscipit sapien purus dignissim orci. Ut vulputate scelerisque sapien tempor dignissim. Vivamus accumsan condimentum rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor lectus et nibh tincidunt, et dignissim lectus scelerisque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum, tortor convallis eleifend dapibus, quam sem commodo lorem, vitae suscipit sapien purus dignissim orci. Ut vulputate scelerisque sapien tempor dignissim. Vivamus accumsan condimentum rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor lectus et nibh tincidunt, et dignissim lectus scelerisque.
          </Paragraph>
        </TextPartFlex>
        <TextPartFlex>
          <HeaderRed>Read Me</HeaderRed>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum, tortor convallis eleifend dapibus, quam sem commodo lorem, vitae suscipit sapien purus dignissim orci. Ut vulputate scelerisque sapien tempor dignissim. Vivamus accumsan condimentum rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor lectus et nibh tincidunt, et dignissim lectus scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum, tortor convallis eleifend dapibus, quam sem commodo lorem, vitae suscipit sapien purus dignissim orci. Ut vulputate scelerisque sapien tempor dignissim. Vivamus accumsan condimentum rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor lectus et nibh tincidunt, et dignissim lectus scelerisque.</Paragraph>
        </TextPartFlex>
      </FlexItem1>

      <FlexItem2></FlexItem2>

    </AboutFlex>
  )
}

const AboutFlex = styled.section`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  z-index: 2;
  margin-bottom: 2rem;
`

const FlexItem1 = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`


const FlexItem2 = styled.div`
  background: url(${BackgroundImage})no-repeat left top/cover;
  width: 100%;
  height: auto;
  flex: 9;
  margin-left: 2rem;
`;

const TextPartFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: justify;
`

export default About;
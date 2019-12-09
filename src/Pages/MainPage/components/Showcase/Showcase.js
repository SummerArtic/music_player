import React from 'react';
import Navbar from '../Navbar';
import classes from './Showcase.module.css';
import Button from '../Common/Button'

const Showcase = (props) => {
  return (
    <section className={classes.Showcase}>
      <div className={classes.Overlay}>
        <div className={classes.Container}>
          <Navbar />
          <h1 className={classes.ShowcaseHeaderSmall}>Welcome to the world of <br />
            <span className={classes.ShowcaseHeaderBig}><span className='RedSpan'>FREEDOM</span> MUSIC</span></h1>
          <p className={classes.ShowcasePar}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum, tortor convallis eleifend dapibus, quam sem commodo lorem, vitae suscipit sapien purus dignissim orci. Ut vulputate scelerisque sapien tempor dignissim. Vivamus accumsan condimentum rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor lectus et nibh tincidunt, et dignissim lectus scelerisque. Maecenas tincidunt fermentum tristique. Duis sem odio, porttitor id sapien ullamcorper, sagittis hendrerit tortor. Nam aliquam posuere facilisis. Duis ornare sem tellus, in sagittis augue rutrum id.</p>
          <div>
            <Button>Start Now</Button>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase;
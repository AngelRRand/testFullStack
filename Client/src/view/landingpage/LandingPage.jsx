import React from 'react'
import { Link } from "react-router-dom";
import Container from '../../component/Container.jsx'
import Button from '../../component/Button.jsx';
import Nav from '../nav/Nav.jsx';
import Transition from '../../component/Transition.jsx';

const LandingPage = () => {

  return (
    <Container WH={'WH_landingPage'}>
      <Transition></Transition>
        <Button>
          <Link to='home'>Home</Link>
        </Button>
    </Container>
  )
}

export default LandingPage
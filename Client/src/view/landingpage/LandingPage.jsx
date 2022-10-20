import React from 'react'
import { Link } from "react-router-dom";
import Container from '../../component/Container.jsx'
import Button from '../../component/Button.jsx';

const LandingPage = () => {
  
  return (
    <Container WH={'WH_landingPage'}>
      <Button>
        <Link to='home'>
          Home
        </Link>
      </Button>
    </Container>
  )
}

export default LandingPage
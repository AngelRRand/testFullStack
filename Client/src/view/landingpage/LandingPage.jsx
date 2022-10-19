import React from 'react'
import { Link } from "react-router-dom";
import Container from '../../component/Container.jsx'
import Button from '../../component/Button.jsx';

const LandingPage = () => {
  
  return (
    <Container>
      <Button>
        <Link to='home'>
          asd
        </Link>
      </Button>
    </Container>
  )
}

export default LandingPage
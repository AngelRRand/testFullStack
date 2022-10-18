import React from 'react'
import Container from '../../component/Container.jsx'
import { Link } from "react-router-dom";
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
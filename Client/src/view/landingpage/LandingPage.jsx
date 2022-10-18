import React from 'react'
import Container from '../../component/Container.jsx'
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <Container>
      <button>
        <Link to='home'>
          <span>asd</span>
        </Link>
      </button>
    </Container>
  )
}

export default LandingPage
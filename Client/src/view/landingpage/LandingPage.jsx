import React from 'react'
import Container from '../../component/Container.jsx'
import Transition from '../../component/Transition.jsx';
import Welcome from '../../component/Welcome.jsx';


const LandingPage = () => {

  return (
    <Container 
      WH={'WH_landingPage'}
      >
      <Transition></Transition>
        <Welcome/>
    </Container>
  )
}

export default LandingPage
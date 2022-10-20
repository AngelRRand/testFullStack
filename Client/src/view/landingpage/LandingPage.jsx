import React from 'react'
import { Link } from "react-router-dom";
import Container from '../../component/Container.jsx'
import Button from '../../component/Button.jsx';
import { motion } from "framer-motion";

const LandingPage = () => {

  return (
    <Container WH={'WH_landingPage'}>
      <motion.div
        initial={{ opacity: 0, }}
        animate={{
          opacity: 1,
          transition: { duration: 1.5, type: "spring" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 1.5, ease: 'easeInOut' },
        }}
      >
        <Button>
          <Link to='home'>Home</Link>
        </Button>
      </motion.div>
    </Container>
  )
}

export default LandingPage
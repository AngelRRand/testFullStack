import React from 'react'
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import './Nav.css'


const Nav = () => {

  const sampleLocation = useLocation();
  if (sampleLocation.pathname.toString() === '/') {
    return <></>
  } else {
    return (
      <motion.div
        initial={{ x: 3500, }}
        animate={{
          x: 0,
          transition: { duration: 1.5, ease: 'easeInOut' },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 1.5, ease: 'easeInOut' },
        }}
      >
        <nav className='nav'>
          <h2>HOLA</h2>
        </nav>

      </motion.div>
    )
  }

}

export default Nav
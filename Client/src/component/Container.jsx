import React from 'react'
import { motion } from "framer-motion";
import './Container.css'
const Container = ({ children, WH }) => {
  return (
    <section className={`container ${WH}`}>
      <motion.div
          initial={{ x: 3500, }}
          animate={{
            x: 0,
            transition: { duration: 2.5, ease: 'easeInOut' },
          }}
          exit={{
            opacity:0 ,
            transition: { duration: 1.5, ease: 'easeInOut' },
          }}
        >
        {children}
      </motion.div>
    </section>
  )
}

export default Container
import React from 'react'
import { motion } from "framer-motion";
import './Container.css'
const Container = ({ children, WH }) => {
  return (
    <motion.div
        initial={{ x: 3500, }}
        animate={{
          x: 0,
          transition: { duration: 2.5, ease: 'easeInOut' },
        }}
        exit={{
          x: -3500,
          transition: { duration: 1.5, ease: 'easeInOut' },
        }}
      >
    <section className={`container ${WH}`}>
        {children}
    </section>
      </motion.div>
  )
}

export default Container
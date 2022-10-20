import React from 'react'
import { motion } from "framer-motion";
import './Container.css'
const Container = ({ children, WH }) => {
  return (
    <section className={`container ${WH}`}>
        {children}
    </section>
  )
}

export default Container
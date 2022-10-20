import React from 'react'
import './Container.css'
const Container = ({ children, WH }) => {
  return (
    <section className={`container ${WH}`}>
        {children}
    </section>
  )
}

export default Container
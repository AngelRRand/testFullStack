import React from 'react'
import './Container.css'
const Container = ({ children, WH, center }) => {
  return (
    <section className={`container ${WH} ${center}`}>
        {children}
    </section>
  )
}

export default Container
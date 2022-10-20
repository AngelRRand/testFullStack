import React from 'react'
import { useLocation } from "react-router-dom";
import './Nav.css'


const Nav = () => {

  const sampleLocation = useLocation();
  if (sampleLocation.pathname.toString() === '/') {
    return <></>
  } else {
    return (
      <nav className='nav'>
        <h2>HOLA</h2>
      </nav>
    )
  }

}

export default Nav
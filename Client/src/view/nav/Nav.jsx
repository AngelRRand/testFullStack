import React from 'react'
import Button from '../../component/Button'
import { useLocation } from "react-router-dom";
import './Nav.css'


const Nav = () => {
  const sampleLocation = useLocation();
  return (
    
      <nav className='nav'>
        <h2>Test Full Stack </h2>
        {
          
          sampleLocation.pathname.toString() === '/' ?  (
            <Button to={'/home'} text={'Home'}>
            </Button>
          ) : (
            <Button to={'/'} text={'Landing'}>
            </Button>
          )
          
        }
      </nav>

  )
}



export default Nav
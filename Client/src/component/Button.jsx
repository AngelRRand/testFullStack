import React from 'react'
import { Link } from "react-router-dom";
import './Button.css'
const Button = ({to, text}) => {
  return (
    <button className='button'>
      <Link to={to}>
        <p>{text}</p>
      </Link>
    </button>
  )
}

export default Button
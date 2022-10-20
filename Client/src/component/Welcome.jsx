import React from 'react'
import './Welcome.css'
import { motion } from "framer-motion";
const Welcome = () => {
    return (
        <motion.div
        className='info'
            initial={{ x: -3500,  }}
            animate= {{
                x: 0, 
                transition: { duration: 5, ease: 'easeInOut' },
            }}
            exit= {{
                opacity: 0,
                trasition: {duration: 2, ease: 'easeInOut'}
            }}
        >
            <div className="skewed">
                <div className='presentation'>
                    <h1>Hola soy Horacio!</h1>
                    <p>Esta es una prueba full stack para <span>Toolbox</span></p>
                    <p>Aprovecho esta oportunidad para presentarme:</p>
                    <ul>
                        <li className='lista'>· Soy capas de hacer me especializo en el <b>front</b></li>
                        <li className='lista'>· Soy de Cordoba <i>Argentina</i></li>
                        <li className='lista'>· Me gustan los <span>perros</span></li>
                    </ul>
                </div>
            </div>
        </motion.div>

    )
}

export default Welcome
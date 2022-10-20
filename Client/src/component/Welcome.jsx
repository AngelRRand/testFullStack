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
                    <h1>HORACIO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse rem sunt quis nostrum aspernatur aliquid itaque. Iste expedita dolor accusantium quae reprehenderit, perspiciatis, quia, distinctio praesentium numquam mollitia recusandae ad?</p>
                </div>
            </div>
        </motion.div>

    )
}

export default Welcome
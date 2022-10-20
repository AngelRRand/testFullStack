import React from 'react'
import { motion } from "framer-motion";
import { box } from './helper/boxs';
import './Transition.css'
const Transition = () => {
    
    return (
        <>
            {
                box.map((b, i) => {
                    console.log(b.animate)
                    return (
                        <motion.div
                            key={i}
                            className={`${b.color} ${b.position}`}
                            initial={{ x: 3500 }}
                            animate={b.animate}
                            exit={b.exit}
                        >

                        </motion.div>
                    )
                })
            }

        </>
    )
}

export default Transition
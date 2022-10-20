import React from 'react'
import { motion } from "framer-motion";
import './Transition.css'
const Transition = () => {
    let box = [
        {
            color: 'red',
            position: 'red_1',
            animate: {
                x: 0,
                transition: { duration: 0.5, ease: 'easeInOut' },
            }
        },
        {
            color: 'red',
            position: 'red_2',
            animate: {
                x: 0,
                transition: { duration: 1, ease: 'easeInOut' },
            }
        },
        {
            color: 'red',
            position: 'red_3',
            animate: {
                x: 0,
                transition: { duration: 1.5, ease: 'easeInOut' },
            }
        },
        {
            color: 'red',
            position: 'red_4',
            animate: {
                x: 0,
                transition: { duration: 2, ease: 'easeInOut' },
            }
        },
        {
            color: 'red',
            position: 'red_5',
            animate: {
                x: 0,
                transition: { duration: 2.5, ease: 'easeInOut' },
            }
        },
        {
            color: 'red',
            position: 'red_6',
            animate: {
                x: 0,
                transition: { duration: 3, ease: 'easeInOut' },
            }
        },
        {
            color: 'red',
            position: 'red_7',
            animate: {
                x: 0,
                transition: { duration: 3.5, ease: 'easeInOut' },
            }
        },
        {
            color: 'red',
            position: 'red_8',
            animate: {
                x: 0,
                transition: { duration: 4, ease: 'easeInOut' },
            }
        },
        {
            color: 'red',
            position: 'red_9',
            animate: {
                x: 0,
                transition: { duration: 4.5, ease: 'easeInOut' },
            }
        },
    ]
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
                            exit={{
                                opacity: 0,
                                transition: { duration: 1.5, ease: 'easeInOut' },
                            }}
                        >

                        </motion.div>
                    )
                })
            }

        </>
    )
}

export default Transition
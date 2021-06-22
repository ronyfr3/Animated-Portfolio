import React from 'react'
import { motion } from 'framer-motion'
import './Text.css'

const TextReveal = () => {
    const line1 = "p"
    const line2 = "r"
    const line3 = "o"
    const line4 = "j"
    const line5 = "e"
    const line6 = "c"
    const line7 = "t"
    const line8 = "s"

    const sentence = {
        hidden: {
            opacity:1
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren:0.08
            }
        }
    }
    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                repeat: Infinity,
                duration: 1,
                repeatType: "reverse",
                repeatDelay: 1,
                ease: [0.17, 0.67, 0.83, 0.67],
                type: "spring",
            }
        }
    }
    return (
        <div className='sjnas'>
            <motion.h1
                className="load-screen-message"
                variants={sentence}
                initial="hidden"
                animate="visible"
                exitBeforeEnter
            >
                <div className='kak'>
                    {
                    line1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                <span className='charss'>{char}</span>
                            </motion.span>
                        )
                    })
                }
                </div>
                <div className='kak'>
                    {
                    line2.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                <span className='charss'>{char}</span>
                            </motion.span>
                        )
                    })
                }
                </div>
                <div className='kak'>
                    {
                    line3.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                <span className='charss'>{char}</span>
                            </motion.span>
                        )
                    })
                }
                </div>
                <div className='kak'>
                    {
                    line4.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                <span className='charss'>{char}</span>
                            </motion.span>
                        )
                    })
                }
                </div>
                <div className='kak'>
                    {
                    line5.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                <span className='charss'>{char}</span>
                            </motion.span>
                        )
                    })
                }
                </div>
                <div className='kak'>
                    {
                    line6.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                <span className='charss'>{char}</span>
                            </motion.span>
                        )
                    })
                }
                </div>
                <div className='kak'>
                    {
                    line7.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                <span className='charss'>{char}</span>
                            </motion.span>
                        )
                    })
                }
                </div>
                <div className='kak'>
                    {
                    line8.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "_" + index} variants={letter}>
                                <span className='charss'>{char}</span>
                            </motion.span>
                        )
                    })
                }
                </div>
            </motion.h1>
        </div>
    )
}

export default TextReveal
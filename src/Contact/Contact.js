import React from 'react'
import Form from './Form'
import {MdEmail} from 'react-icons/md'
import { FaPhoneVolume } from 'react-icons/fa'
import { animateThree, transition } from '../Animations/Animate'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
         <motion.div
            style={{ marginTop: '100px', marginBottom: '100px' }}
            initial="out"
            animate="end"
            exit="out"
            variants={animateThree}
            transition={transition}
            className='contactsss'
        >
            {/* contact */}
            <div className='sodn'>
                <p className='sjsj'>Contact</p>
                <div className='dksjss'>
                    <span>
                        <FaPhoneVolume/>
                        <span className='hhh'>+880 1997513691</span>
                    </span>
                    <span>
                        <MdEmail/>
                        <span className='hhh'>rakib.fstackdev@gmail.com</span>
                    </span>
                </div>
            </div>

            {/* form */}
            <div>
                <Form/>
            </div>
        </motion.div>
    )
}

export default Contact

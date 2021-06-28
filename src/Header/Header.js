import React, { useState } from 'react'
import './Header.css'
import {Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Online from '.././OnlineStatus/Online'

const Header = () => {
     const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY > window.innerHeight/2){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  
    
    return (
        <div id="goToTop">
        <div  className={colorChange ? 'changed' : 'header'}>
                <motion.p
                    drag
                    dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}
                    dragMomentum={false}
                    dragElastic={0.2}
                    className='rakib'
                >Rakib</motion.p>
                <div className='links'>
                <Link to='/' className='ldkl'>Home</Link>
                <Link to='/projects' className='ldkl'>Projects</Link>
                <Link to='/contact' className='ldkl'>Contact</Link>
                <Online/>
           </div>
            </div>
            </div>
    )
}

export default Header

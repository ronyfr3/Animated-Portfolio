import React from 'react'
import Education from '../Education/Education'
import Info from '../PersonalInfo/Info'
import Proficiency from '../Proficiency/Proficiency'
import Skills from '../Skill/Skills'
// import Terminal from '../Terminal/Terminal'
import Do from '../WhatIDo/Do'
import { animateOne, transition } from '../Animations/Animate'
import {motion} from 'framer-motion'
// import MenuBtn from '../MenuBtn/MenuBtn'
const Home = () => {
    
 
    return (
         <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={animateOne}
            transition={transition}
        >
            {/* <Terminal /> */}
            <Info />
            {/* <MenuBtn/> */}
            <Do/>
            <Skills />
            <Proficiency />
            <Education/>
        </motion.div>
           
    )
  }

export default Home

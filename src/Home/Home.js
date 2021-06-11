import React from 'react'
import Education from '../Education/Education'
import MenuBtn from '../MenuBtn/MenuBtn'
import Info from '../PersonalInfo/Info'
import Proficiency from '../Proficiency/Proficiency'
import Skills from '../Skill/Skills'
import Terminal from '../Terminal/Terminal'
import GoTop from '../ToptoBottom/GoTop'
import Do from '../WhatIDo/Do'

const Home = () => {
    return (
        <div>
            <Terminal />
            <Info />
            <Do/>
            <Skills />
            <Proficiency />
            <Education/>
        </div>
    )
}

export default Home

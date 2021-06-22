import React from 'react'
import {DiMongodb,DiCss3} from 'react-icons/di'
import {FaHtml5,FaReact} from 'react-icons/fa'
import {SiJavascript,SiNativescript} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {GrNode} from 'react-icons/gr'
import './Skills.css'

const Skills = () => {
    return (
        <div className='skill'>
            <h3 className='skills'>SKILLS</h3>
            <div className='conskil'>
                <span>
                    <FaHtml5  className='logo'/>
                    <p>HTML 5</p>
                </span>
                <span>
                   <DiCss3 className='logo'/>
                    <p>CSS 3</p>
                </span>
                <span>
                    <BsFillBootstrapFill className='logo'/>
                    <p>Bootstrap</p>
                </span>
                <span>
                    <SiJavascript className='logo'/>
                    <p>JavaScript</p>
                </span>
                <span>
                    <FaReact className='logo'/>
                    <p>React JS</p>
                </span>
                <span>
                    <GrNode className='logo'/>
                    <p>Node JS</p>
                </span>
                
                <span>
                    <SiNativescript className='logo'/>
                    <p>React Native</p>
                </span>
                <span>
                    <DiMongodb className='logo'/>
                    <p>Mongodb</p>
                </span>
            </div>
        </div>
    )
}

export default Skills

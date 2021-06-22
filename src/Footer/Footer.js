import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'
import './Footer.css'
import {FaArrowCircleUp} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <button className='btnf'><FaArrowCircleUp className='upa'/></button>
            <div className='foo'>
                <a href="https://github.com/ronyfr3">
                    <FaGithub className='cli'/>
                </a>

                <a href="https://www.linkedin.com/in/abdur-rakib-rony-769367214/">
                    <FaLinkedin className='cli'/>
                </a>
            </div>
            <p className='copyright'>Copyright <BiCopyright className='copyr'/> Abdur Rakib Rony</p>
        </div>
    )
}

export default Footer

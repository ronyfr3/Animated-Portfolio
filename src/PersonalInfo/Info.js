import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import './Info.css'

const Info = () => {
    return (
        <div className='info'>
            <div className='descon'>
                <p className='hiiam'>Hi all, I'm Rakib</p>
                <p className='pana'>A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs and some other cool libraries and frameworks and Cross Platform Mobile Apps With React-Native.</p>

                <button className='resd'>
                    <FaFilePdf className='file'/>
                    See my resume
                </button>
            </div>
            <a href="https://www.animatedimages.org/cat-computer-56.htm"><img src="https://www.animatedimages.org/data/media/56/animated-computer-image-0192.gif" border="0" alt="animatedgif"/></a>
        </div>
    )
}

export default Info

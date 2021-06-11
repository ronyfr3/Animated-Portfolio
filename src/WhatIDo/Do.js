import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import './DO.css'
const Do = () => {
    return (
        <div className='do'>
            <h1 className='djs'>What I do</h1>
            <p className='skkjs'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
            <div className='anima'>
                <a href="https://www.animatedimages.org/cat-computer-56.htm"><img src="https://www.animatedimages.org/data/media/56/animated-computer-image-0013.gif" border="0" alt="animated" /></a>
                <div className='adjj'>
                    <p><AiFillThunderbolt className='lsj'/>Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
                    <p><AiFillThunderbolt className='lsj'/>Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>
                    <p><AiFillThunderbolt className='lsj'/>Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
                </div>
            </div>
        </div>
    )
}

export default Do

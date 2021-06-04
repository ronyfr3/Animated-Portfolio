import React, { useState } from 'react'
import {RiBarChartHorizontalLine} from 'react-icons/ri'
import {AiFillLinkedin,AiFillFacebook,AiFillGithub} from 'react-icons/ai'
import './MenuBtn.css'
import {Link} from 'react-router-dom'

const MenuBtn = () => {
    const [open, setOpen] = useState(false)
    const openIt = () => {
        setOpen(true)
    }
    const closeIt = () => {
        setOpen(false)
    }
    return (
        <div className='menubtn'>
            <button className='btn' onClick={openIt}>
                <RiBarChartHorizontalLine className='ri'/>
            </button>
            <div className={ open?'menu':'menu2'}>
                <span className='closeText'>Close Menu</span>
                <span className='close' onClick={closeIt}>X</span>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <div className='social'>
                    <AiFillGithub />
                    <AiFillFacebook />
                    <AiFillLinkedin/>
                </div>
            </div>
        </div>
    )
}

export default MenuBtn

import React, { useState } from 'react'
import './Header.css'
import {Link } from 'react-router-dom'

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
                <p className='rakib'>Rakib</p>
            <div className='links'>
                <Link to='/' className='ldkl'>Home</Link>
                <Link to='/projects' className='ldkl'>Projects</Link>
                <Link to='/contact' className='ldkl'>Contact</Link>
           </div>
            </div>
            </div>
    )
}

export default Header

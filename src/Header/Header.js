import React, { useState } from 'react'
import './Header.css'
const Header = () => {
     const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >=window.innerHeight/2){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div  className={colorChange ? 'changed' : 'header'}>
            <div className='logo'>
                <span className='logo1'>Full Stack</span>
                <span className='logo2'>Developer</span>
            </div>
            <div className='zo'>
                <span className='zero'>0</span>
                <span className='one'>1</span>
            </div>
        </div>
    )
}

export default Header

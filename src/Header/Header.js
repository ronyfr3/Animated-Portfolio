import React, { useState } from 'react'
import './Header.css'
import {Link,useHistory } from 'react-router-dom'

const Header = (props) => {
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
    let history = useHistory()
    
    return (
        <div  className={colorChange ? 'changed' : 'header'}>
                <p className='rakib' onClick={()=>history.push('/')}>Rakib</p>
            <div className='links'>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
           </div>
        </div>
    )
}

export default Header

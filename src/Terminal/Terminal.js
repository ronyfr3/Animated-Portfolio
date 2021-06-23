import React, { useEffect, useState } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import './Terminal.css'

const Terminal = () => {
    const [text,setText]= useState('')
    const [yes, setYes] = useState(false)
    console.log(text)

    useEffect(() => {
        if (window.sessionStorage.getItem("firstLoadDone") === null) {
             setYes(true)
            window.sessionStorage.setItem("firstLoadDone",1)
        } else {
            setYes(false)
        }
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === 'boss') {
           return setYes(false)
        }
    }
    return (
        <div className={yes ? 'showTerminal' : 'hideTerminal'}>
            <div className='content'>
                <p className='ptext'>
                    <RiArrowRightSLine className='arrow'/>Hey there! Do you know me? For basic command type boss to view my portfolio!</p>
            <div className='arrowInput'>
                <form onSubmit={handleSubmit}>
                            <RiArrowRightSLine className='arrow'/>
                    <input type='text' placeholder='' onChange={(e) => setText(e.target.value)} value={text} />
                    <input type="submit" style={{ display: 'none' }} />
                </form>
           </div>
            </div>
            </div>
    )
}

export default Terminal

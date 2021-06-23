import React from 'react'
import './Contact.css'

const Notify = (props) => {
    if (props.send) {
        setTimeout(() => {
            props.setSend(false)
        },4000)
    } else {
        console.log('chill')
    }
    return (
        <div>
             {props.send ? <p className='msgissss'>Message received!</p>:null}
        </div>
    )
}

export default Notify

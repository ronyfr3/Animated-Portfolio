import React, { useState } from 'react'
import './Contact.css'
// import axios from 'axios'
import Notify from './Notify'

const Form = () => {
    
    const [inV,setInV]=useState({
        name: '',
        email: '',
        msg:''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setInV({
            ...inV,[name]:value
        })
    }
    const [send, setSend] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.post('/api/form',inV).then(res => {
        //     setSend(true)
        // }).catch(() => {
        //      window.alert("You just broke something!");
        // })
        window.localStorage.setItem('msg',JSON.stringify({name:inV.name,email:inV.email,msg:inV.msg}))
        setInV({
            name: '',
            email: '',
            msg:''
        })
        setSend(true)
    }
    console.log(inV)
    return (
        <div className='formdd'>
            <Notify send={send} setSend={setSend}/>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type='text' placeholder='' value={ inV.name } name='name' onChange={ handleChange } required />
                
                <label>Email</label>
                <input type='email' placeholder='' value={ inV.email} name='email' onChange={ handleChange } required />
                
                <label>Message</label>
                <textarea type='text' placeholder='' value={ inV.msg } name='msg' onChange={ handleChange} required></textarea>
                <button className='skaka'>Send Message</button>
            </form>
        </div>
    )
}

export default Form

import React from 'react'
import { Progress } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profi.css'

const Proficiency = (props) => {
    return (
        <div className='prop'>
            <h1>Proficiency</h1>
            <p>FRONTEND/DESIGN</p>
            <Progress value="90">90%</Progress>
            
            <p>BACKEND</p>
            <Progress value="70">70%</Progress>
            
            <p>PROGRAMMING</p>
            <Progress value="60">60%</Progress>
        </div>
    )
}

export default Proficiency

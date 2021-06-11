import React from 'react'
import './Edu.css'
import {FaBookReader} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'

const Education = () => {
    return (
        <div className='edu'>
            <div className='skcn'>
                <h1 className='dkaj'>
             <FaBookReader className='fab'/>
              Education
            </h1>
            </div>
            <div className='sakjd'>
            <div className='skjcsm'>
                <p className='bauet'>Bangladesh Army University of Engineering & Technology</p>
                <p className='bach'>Bachelor of Science in Computer Science</p>
                    <p className='dates'>january 2017 - april 2021</p>
                    <p className='toto'>Bangladesh Army University of Engineering & Technology is a Government and UGC approved private university operated by the Bangladesh Army.</p>
                     <p className='ssj'><ImLocation className='location'/>Qadirabad Cantonment, Rajshahi, Bangladesh</p>
            </div>
             <div className='skjcsm'>
                <p className='bauet'>Dhanmondi Ideal College</p>
                <p className='bach ideal'>Department of Science</p>
                    <p className='dates'>january 2015 - february 2017</p>
                    <p className='toto'>Ideal College is one of the oldest private college offer higher secondary education for both boys and girls in Science, Commerce and Humanities groups.One of the beautiful and finest College in Dhaka.</p>
                     <p className='ssj'><ImLocation className='location'/>Central Rd, Dhaka 1205, Bangladesh</p>
            </div>
            <div className='skjcsm'>
                <p className='bauet'>Shapla Kali Adarsha Secondary School</p>
                <p className='bach'>Department of Science</p>
                    <p className='dates'>July 2005 - November 2014</p>
                    <p className='toto'>Shapla Kali Adarsha Secondary School is an academic institute located at Dattananagar Jiban Nagar,Chuadanga.It was established on 01 January, 1993. Its co-education type is Combined.</p>
                     <p className='ssj'><ImLocation className='location'/>Duttanagar Rd, Jibannagar, Bangladesh</p>
            </div>
            
            </div>
        </div>
    )
}

export default Education

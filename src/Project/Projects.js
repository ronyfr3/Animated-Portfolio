import React from 'react'
import './Project.css'
import TextReveal from './../Animated/Text'
import { Link } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'

const Projects = () => {
    return (
        <div className='projects'>
            <div>
                <TextReveal/>
            </div>
            <div className='projectfield'>
            {/* project body */}
                <div className='jahd'>
                     <small><span className='fea'>FEATURED</span> ... december <span className='dasna'>8, 2020</span></small>
                    <Link className='jad' to={{ pathname: "https://fr3shop.netlify.app/" }} target="_blank" >
                        
                    <div className='hsk'>
                            <p className='appname'>
                                Shop <AiFillEye className='goeye'/>
                            </p>
                    </div>
                    <img src='shopping.jpg' alt=''/>
                </Link>
                
            </div>
            {/* project body */}
                <div className='jahd'>
                    <small><span className='fea'>FEATURED</span> ... september <span className='dasna'>21, 2021</span></small>
                <Link to={{pathname:"https://fr3music.netlify.app/"}} target='_blank' className='jad'>
                    <div className='hsk'>
                            <p className='appname'>
                                Music <AiFillEye className='goeye'/>
                            </p>
                    </div>
                    
                    <img src='mus.jpg' alt=''/>
                </Link>
                
            </div>
            {/* project body */}
                <div className='jahd'>
                    <small><span className='fea'>FEATURED</span> ... november <span className='dasna'>30, 2020</span></small>
                <Link to={{pathname:"https://fr3-newspaper.netlify.app/"}} target='_blank' className='jad'>
                     <div className='hsk'>
                            <p className='appname'>
                                Newspaper <AiFillEye className='goeye'/>
                            </p>
                    </div>
                    
                    <img src='newsp.jpg' alt=''/>
                </Link>
                
            </div>
            {/* project body */}
                <div className='jahd'>
                    <small><span className='fea'>FEATURED</span> ... february <span className='dasna'>18, 2020</span></small>
                    <Link to={{pathname:'https://covid19-track-application.netlify.app/'}} target='_blank' className='jad'>
                         <div className='hsk'>
                            <p className='appname'>
                                Covid19 <AiFillEye className='goeye'/>
                            </p>
                    </div>
                    
                    <img src='cov.jpg' alt=''/>
                    </Link>
            </div>
            {/* project body */}
                <div className='jahd'>
                    <small><span className='fea'>FEATURED</span> ... may <span className='dasna'>10, 2020</span></small>
                <Link to={{pathname:"https://fr3sports.netlify.app/"}} target='_blank' className='jad'>
                    <div className='hsk'>
                            <p className='appname'>
                                Sports <AiFillEye className='goeye'/>
                            </p>
                    </div>
                    
                    <img src='cric.jpg' alt=''/>
                </Link>
                
            </div>
            {/* project body */}
                <div className='jahd'>
                    <small><span className='fea'>FEATURED</span> ... october <span className='dasna'>26, 2019</span></small>
                <Link to={{pathname:"https://ronyfr3.github.io/Weather-Application-in-React-Js/"}} target='_blank' className='jad'>
                   <div className='hsk'>
                            <p className='appname'>
                                Weather <AiFillEye className='goeye'/>
                            </p>
                    </div>
                    
                    <img src='weathers.jpg' alt=''/>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Projects

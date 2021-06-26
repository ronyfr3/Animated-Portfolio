import React,{useEffect,useRef} from 'react'
import { FaFilePdf } from 'react-icons/fa'
import './Info.css'
import lottie from 'lottie-web'

const Info = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            render:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../Animated/Lottie')
        })
    },[])
    
    return (

        <div className='info'>
            <div className='descon'>
                <p className='hiiam'>Hi all, I'm Rakib</p>
                <p className='pana'>A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs and some other cool libraries and frameworks and Cross Platform Mobile Apps With React-Native.</p>

                {/* <a href="https://res.cloudinary.com/fr3music/raw/upload/v1623413073/cv/Abdur_Rakib_Rony_Resume_t7nhug.docx" className='down'>Download
                </a> */}
                <a href='Abdur Rakib Rony_Resume.pdf' download className='down'>
                    <FaFilePdf className='file'/>
                    Resume
                </a>
            </div>
            {/* <a
                href="https://www.animatedimages.org/cat-computer-56.htm"
                className='imoh'>
                <img src="https://www.animatedimages.org/data/media/56/animated-computer-image-0192.gif" border="0" alt="animatedgif" />
            </a> */}
            <div className='lottie' ref={container}></div>
        </div>
    )
}

export default Info

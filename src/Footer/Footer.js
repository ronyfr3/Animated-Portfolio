import React from 'react'
import './Footer.css'
const Footer = () => {
    var todayDate = new Date().toISOString().slice(0, 10);
    
    return (
        <div className='footer'>
            <p>{todayDate}</p>
          <div>
              <p className='top'><span></span>TOP</p>  
          </div>
           <div className='foo'>
                <div className='maplink'>
                <p className='contact'>contact</p>
                <p className='bold'>rakib.devatmern@gmail.com</p>
                <p className='bold'>+880 1997513691</p>
                <p>Khulna,Bangladesh</p>
                <a href="https://www.google.com/maps/place/Sonali+Bank+Ltd,+Uthali+Br./@23.4938093,88.8424784,17z/data=!3m1!4b1!4m5!3m4!1s0x39fed394b5bccd47:0xac7746a67127bf3e!8m2!3d23.4938038!4d88.844652" className='bold map'>View on Map</a>
            </div>
            <div>
                logos
            </div>
            </div>
            <p className='creator'>@ -ABDUR RAKIB RONY</p>
        </div>
    )
}

export default Footer

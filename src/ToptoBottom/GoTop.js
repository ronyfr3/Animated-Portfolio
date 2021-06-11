import React from 'react'
import './Style.css'

const GoTop = () => {
    return (
        <div className={window.scrollY > 500 ? 'show' : 'hide'}>
            <button className='top'>Top</button>
        </div>
    )
}

export default GoTop

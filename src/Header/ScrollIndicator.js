import React, { useEffect, useState } from 'react'
import {useWindowScroll} from 'react-use'
import './Header.css'

const ScrollIndicator = () => {
    const { y } = useWindowScroll()
    const [scrollPosition, setScrollPosition] = useState(0)
    
    useEffect(() => {
        const height = document.documentElement.scrollHeight-document.documentElement.clientHeight
        setScrollPosition((y/height)*100)
    },[y])
    return (
        <div className='mainScrollDiv'>
            <div className='indicator' style={{width:`${scrollPosition}%`}}></div>
        </div>

    )
}
export default ScrollIndicator
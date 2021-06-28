import React, { useEffect, useState } from 'react'
import './ActiveUser.css'
import { usePubNub } from 'pubnub-react';
import { BsFillPersonLinesFill } from 'react-icons/bs'

const ActiveUsers = () => {
    const pubnub = usePubNub();
    const [text,setText] = useState(1)
    const [channels] = useState(['fr3portfolio']);

    useEffect(() => {
        pubnub.addListener({
            presence:function (presenceEvent) {
                setText(presenceEvent.occupancy)
                console.log('po',presenceEvent.occupancy)
        }
    });
        pubnub.subscribe({ channels , withPresence:true});
    }, [pubnub, channels])

    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(true)
    }
    useEffect(() => {
        if (show === true) {
            setTimeout(() => {
                setShow(false)
            },3000)
        }
    },[show])
    console.log(show)
    return (
        <div className='show'>
            <button onClick={handleClick} className='prebtn'>
                {
                    show ?
                        <span className='acivetext'>{`Online Active: ${text}`}</span> : <BsFillPersonLinesFill className='ico'/>
                }
            </button>
        </div>
    )
}

export default ActiveUsers

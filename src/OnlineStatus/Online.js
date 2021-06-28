import React from 'react'
import useOnlineStatus from '@rehooks/online-status';
import { HiStatusOffline, HiOutlineStatusOnline } from 'react-icons/hi'
import ReactTooltip from 'react-tooltip';

const Online = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className='ono'>
            {
                onlineStatus ?
                    <div>
                        <HiOutlineStatusOnline style={{ fontSize: '18px',color:'yellow',marginLeft:'5px',border:'none',outline:'none' }} data-tip="you are online" data-text-color='yellow'/>
                        <ReactTooltip place="bottom" type="dark" effect="float"/>
                   </div> :
                    <div>
                        <HiStatusOffline style={{ fontSize: '18px',color:'red'}} data-tip="you are offline" data-text-color='red'/>
                        <ReactTooltip place="bottom" type="dark" effect="float"/>
                   </div>
            }
            
        </div>
    )
}

export default Online

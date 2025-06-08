import React from 'react'
import { BounceLoader  } from 'react-spinners' 

export default function Loader ({fullHeight=true}) {
    const containerClass=`
        w-full flex justify-center items-center
        ${fullHeight ? 'h-screen' : 'py-5'}
    `
    return (
        <div className={containerClass}>
            <BounceLoader color='#dc3545' size={60} />  
        </div>
    )
}
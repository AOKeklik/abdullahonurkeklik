import React from 'react'

export default function Heading({ text, className = '' }) {
    return (
        <h2
            className={`text-2xl sm:text-4xl font-bold tracking-tight inline-block border-b-3 border-red-200 pb-2 text-gray-600 uppercase ${className}`}
        >
            <span className='text-sm block font-thin tracking-widest uppercase'>Abdullah Onur Keklik</span>
            {text}
        </h2>
    )
}

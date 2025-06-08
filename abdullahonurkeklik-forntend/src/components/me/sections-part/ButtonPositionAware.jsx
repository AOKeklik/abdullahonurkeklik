'use client';

import { useRef } from 'react';

export default function ButtonPositionAware({ text, onClick }) {
    const spanRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        if (spanRef.current) {
        spanRef.current.style.left = relX + 'px';
        spanRef.current.style.top = relY + 'px';
        }
    };

    return (
        <button
            onClick={onClick}
            onMouseEnter={handleMouseMove}
            onMouseLeave={handleMouseMove}
            className="relative inline-block w-[250px] h-[80px] border border-black uppercase text-black overflow-hidden cursor-pointer transition-colors duration-300 text-white hover:text-red-500 rounded-4xl text-2xl"
        >
            {text}
            <span
                ref={spanRef}
                className="absolute bg-black rounded-full w-2 h-2 transition-[width,height] duration-[700ms] ease-in-out -translate-x-1/2 -translate-y-1/2 z-[-1]"
            />
            <style jsx>{`
                button:hover span {
                width: 300%;
                height: 300%;
                }
            `}</style>
        </button>
    )
}

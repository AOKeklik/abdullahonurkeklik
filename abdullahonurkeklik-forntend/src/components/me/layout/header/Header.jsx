'use client'

import React, { useEffect, useState } from 'react'

import useScrollToSection from './useScrollToSection'
import Sidebar from './Sidebar'

import useSettings from '@/hook/useSettings'

export default function Header() {
    const { activeSection, scrollToSection } = useScrollToSection()
    const { logo, menus } = useSettings()

/* ///////////////////////////////////////// */
    const [fixedHeader, setFixedHeader] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setFixedHeader(window.scrollY > 50)
        }
        
        // Call it once initially
        handleScroll()
        
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
/* ///////////////////////////////////////// */


    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 shadow transition-colors duration-500 !max-h-[115.141px] 
                ${fixedHeader ? "bg-gray-200" : "bg-transparent"}`}
        >
            <div className="custom-container py-7 flex justify-between items-center">
                {/* Logo */}
                <img
                    src={logo}
                    alt="logo"
                    className={`object-contain transition-all duration-500 cursor-pointer 
                        ${fixedHeader ? "w-15 opacity-100" : "w-20 opacity-70 -mt-3"}`}
                    onClick={() => scrollToSection("hero")}
                />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {menus.map((menu, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToSection(menu.slug)}
                            className={`text-lg hover:text-red-600 transition-colors cursor-pointer
                                ${fixedHeader ? "text-gray-700" : "text-white"} 
                                ${activeSection === menu.slug ? "text-red-600 font-semibold" : "hover:text-red-600"}`}
                        >{menu.name}</button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Sidebar fixedHeader={fixedHeader} />
                </div>
            </div>
        </header>
    )
}

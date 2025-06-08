import { useState, useEffect } from 'react'

export default function useScrollToSection(headerSelector = 'header') {
    const [activeSection, setActiveSection] = useState('')

    const scrollToSection = (id) => {        
        const element = document.getElementById(id)
        const header = document.querySelector(headerSelector)
        const headerHeight = header ? header.offsetHeight : 0

        if (element) {
            const elementTop = element.getBoundingClientRect().top + window.scrollY
            const scrollTo = elementTop - headerHeight

            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth',
            })

            setTimeout(() => {
                setActiveSection(id)
            }, 300)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const offset = 120
            let current = ''

            const sections = document.querySelectorAll('section[id]')
            sections.forEach((section) => {
                const top = section.offsetTop - offset
                const bottom = top + section.offsetHeight

                if (scrollY >= top && scrollY < bottom) {
                    current = section.id
                }
            })

            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        
        // ✅ Trigger once on mount to detect the active section
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return { activeSection, scrollToSection }
}

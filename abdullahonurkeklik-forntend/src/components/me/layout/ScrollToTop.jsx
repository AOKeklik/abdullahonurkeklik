"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <Button
            onClick={scrollToTop}
            variant="secondary"
            size="icon"
            className={cn(
                "fixed bottom-6 right-6 z-50 rounded-full shadow-md transition-opacity p-5 text-red-600 cursor-pointer",
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll to top"
        >
            <ArrowUp className="!h-6 !w-6" />
        </Button>
    )
}

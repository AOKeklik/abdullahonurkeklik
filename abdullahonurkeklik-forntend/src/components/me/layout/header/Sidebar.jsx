import React from 'react'
import Link from 'next/link'

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa"
import { Menu, X } from "lucide-react"
import { Separator } from '@radix-ui/react-select'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import useSettings from '@/hook/useSettings'
import useScrollToSection from './useScrollToSection'


export default function Sidebar({fixedHeader}) {
    const { scrollToSection } = useScrollToSection()
    const { menus } = useSettings()

    return (
        <Sheet>
            {/* Left: Burger Button */}
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`cursor-pointer hover:bg-transparent border border-transparent
                    ${fixedHeader ? "hover:border-red-600 hover:text-red-600" : "text-white hover:text-white hover:border-white"}`}>
                    <Menu className="w-6! h-6!" />
                </Button>
            </SheetTrigger>

            {/* Menu */}
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-gray-600 border-none">
                {/* Custom Close Button */}
                <SheetClose asChild>
                    <Button className="absolute right-4 top-4 text-gray-400 hover:text-white cursor-pointer">
                        <X className="w-6 h-6 md:w-7 md:h-7" />
                    </Button>
                </SheetClose>

                <div className="flex flex-col h-full p-6 mt-15">

                    <div>
                        {/* Menu Content */}
                        <div className="space-y-6 flex-1"> 
                            <ul className="space-y-3 text-lg">
                                {menus.map((menu, i) => (
                                    <li key={i}>
                                        <SheetClose asChild>
                                            <button 
                                                onClick={() => scrollToSection(menu.slug)}
                                                className="text-gray-200 hover:text-white flex items-center gap-3 cursor-pointer"
                                            >
                                                {menu.name}
                                            </button>
                                        </SheetClose>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    {/* Social Links (Bottom) */}
                    <div className="mt-auto">
                        <Separator className="my-6 h-[1px] bg-gray-500" />

                        <div className="flex space-x-4 justify-center">
                            <Link href="#" aria-label="Facebook">
                                <FaFacebook  className="w-5 h-5 text-gray-400 hover:text-white" />
                            </Link>
                            <Link href="#" aria-label="LinkedIn">
                                <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                            </Link>
                            <Link href="#" aria-label="Twitter">
                                <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white" />
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <FaInstagram className="w-5 h-5 text-gray-400 hover:text-white" />
                            </Link>
                            <Link href="#" aria-label="YouTube">
                                <FaYoutube className="w-5 h-5 text-gray-400 hover:text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

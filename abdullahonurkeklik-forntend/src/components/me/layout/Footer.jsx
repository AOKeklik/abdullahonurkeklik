import React from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Separator } from '@radix-ui/react-select'

import useScrollToSection from './header/useScrollToSection'
import { Button } from '@/components/ui/button'

import useSettings from '@/hook/useSettings'

export default function Footer() {
    const { 
        logo, 
        address,
        phone: phoneNumber,
        email, 
        menus,
        copy
    } = useSettings()
    const { scrollToSection } = useScrollToSection()

    return (
        <footer className="bg-gray-800 text-gray-400 pt-13 pb-5">
            <div className="container mx-auto pb-5 px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {/* Logo & About – spans 2 columns on lg */}
                <div className="min-w-[220px] flex flex-col items-center lg:items-start lg:col-span-2">
                    <div className="mb-4">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-20 w-auto object-contain cursor-pointer"
                            onClick={() => scrollToSection("hero")}
                        />
                    </div>
                    <p className="text-sm text-center lg:text-left text-gray-400 max-w-md">
                        I'm a passionate web developer crafting engaging, responsive, and user-focused digital experiences. Let's build something great together!
                    </p>
                </div>

                {/* Navigation */}
                <div className="min-w-[180px] flex flex-col items-center lg:items-start lg:!ml-[6rem]">
                    <h3 className="text-md font-semibold mb-4 text-white uppercase">Navigation</h3>
                    <ul className="space-y-2 text-sm">
                        {menus.map((menu, i) => (
                            <li key={i}>
                                <Button
                                    variant="ghost"
                                    onClick={() => scrollToSection(menu.slug)}
                                    className="hover:text-white cursor-pointer hover:bg-transparent"
                                >{menu.name}</Button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="min-w-[180px] flex flex-col items-center lg:items-start">
                    <h3 className="text-md font-semibold mb-4 text-white uppercase">Contact Info</h3>
                    <div className="flex items-start gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                        <p dangerouslySetInnerHTML={{ __html: address }} />
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                        <Phone className="w-4 h-4 text-gray-400 mt-1" />
                        <p>{phoneNumber}</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-gray-400 mt-1" />
                        <p>{email}</p>
                    </div>
                </div>

                {/* Policies */}
                <div className="min-w-[180px] flex flex-col items-center lg:items-start">
                    <h3 className="text-md font-semibold mb-4 text-white uppercase">Policies</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/page/terms" className="hover:text-white">Terms & Conditions</Link></li>
                        <li><Link href="/page/cookies" className="hover:text-white">Cookie Policy</Link></li>
                        <li><Link href="/page/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/page/returns" className="hover:text-white">Return Policy</Link></li>
                        <li><Link href="/page/dataprocessing" className="hover:text-white">Data Processing</Link></li>
                        <li><Link href="/page/company" className="hover:text-white">About the Company</Link></li>
                        <li><Link href="/page/gdpr" className="hover:text-white">GDPR Info</Link></li>
                    </ul>
                </div>
            </div>

            <Separator className="my-6 h-[1px] bg-gray-700" />

            <div className="text-center text-sm text-gray-500">
                <p dangerouslySetInnerHTML={{ __html: copy }} />
            </div>
        </footer>
    )
}
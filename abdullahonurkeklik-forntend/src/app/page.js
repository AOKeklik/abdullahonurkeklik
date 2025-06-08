 "use client"

import Footer from "@/components/me/layout/Footer"
import Header from "@/components/me/layout/header/Header"
import ScrollToTop from "@/components/me/layout/ScrollToTop";

import SectionHero from "@/components/me/sections/SectionHero"
import SectionServices from "@/components/me/sections/SectionServices"
import SectionAbout from "@/components/me/sections/SectionAbout"
import SectionLewiatan from "@/components/me/sections/SectionLewiatan"
import SectionCounter from "@/components/me/sections/SectionCounter"
import SectionProjects from "@/components/me/sections/SectionProjects"
import SectionContact from "@/components/me/sections/SectionContact"

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Header />

            <SectionHero />
            <SectionServices />
            <SectionAbout />
            <SectionLewiatan />
            <SectionCounter />
            <SectionProjects />
            <SectionContact />

            <ScrollToTop />
            <Footer />
	    </div>
    )
}
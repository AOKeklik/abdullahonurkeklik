"use client"

import React from "react"
import Image from "next/image"

import AnimateInViews from "../layout/AnimateInViews"
import Heading from "../sections-part/Heading"

import img from "@/../public/creativity-49.png"
import FormContact from "../form/FormContact"

export default function SectionContact() {
    return (
        <section 
            id="contact"
            className="py-16 px-4 max-w-6xl mx-auto"
        >
            {/* Heading */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <AnimateInViews direction="up" className="mb-5">
                    <Heading text="get in touch" />
                </AnimateInViews>
                
                <AnimateInViews direction="up" delay={.3}>
                    <p className="text-gray-500 text-lg">
                        Feel free to reach out for collaborations, questions, or just a friendly hello! Whether you have a project in mind, need help with something creative, or simply want to connect—I'm always open to meaningful conversations and new opportunities.
                    </p>
                </AnimateInViews>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Image */}
                <AnimateInViews direction="left" delay={.5}>
                    <div className="flex justify-center">
                        <Image
                            src={img} // Replace with your image path
                            alt="Contact"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </AnimateInViews>

                {/* Right Contact Form */}
                <AnimateInViews direction="right" delay={.7}>
                    <FormContact />
                </AnimateInViews>
            </div>
        </section>
    )
}

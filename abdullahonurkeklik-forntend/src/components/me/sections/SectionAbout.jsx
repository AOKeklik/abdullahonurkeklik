'use client'

import React from 'react'
import Image from 'next/image'
import Heading from '../sections-part/Heading'
import FormRequestResume from '../form/FormRequestResume'
import AnimateInViews from '../layout/AnimateInViews'

import img from "@/../public/problem-solving-5-67.png"

export default function SectionAbout() {
    return (
        <section 
            id="about"
            className="py-16 bg-white"
        >
            <div className="custom-container flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center">

                {/* Left: Image */}
                <div className="w-full">
                    <AnimateInViews direction="left" className='flex justify-center lg:justify-start'>
                        <Image
                            src={img}
                            alt="About me"
                            width={500}
                            height={500}
                            className="rounded-xl object-cover"
                        />
	                </AnimateInViews>
                </div>

                {/* Right: Text + Button */}
                <div className="space-y-6">
                    <AnimateInViews direction="up" delay={.3}>
                        <Heading text="something about me" />
                    </AnimateInViews>

                    <AnimateInViews direction="up" delay={.5}>
                        <p className="text-lg text-muted-foreground mb-5">
                            I'm a full-stack developer with over 10 years of experience crafting fast, scalable, and modern web applications. From sleek, responsive frontends to secure, high-performance backends, I deliver end-to-end solutions tailored to each client’s needs.
                        </p>
                    </AnimateInViews>

                    <AnimateInViews direction="up" delay={.7}>
                        <p className="text-lg text-muted-foreground"> My background in IT, shaped and sharpened through years of professional development and hands-on learning in Poland's vibrant tech environment, gives me a unique edge. Clients rely on me for clean, reliable code, timely delivery, and a deep attention to detail — all backed by ongoing technical support they can count on.
                        </p>
                    </AnimateInViews>

                    {/* Request Resume Button with Modal */}
                    <AnimateInViews direction="up" delay={.10}>
                        <FormRequestResume />
                    </AnimateInViews>
                </div>
            </div>
        </section>
    )
}

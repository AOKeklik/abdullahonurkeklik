import React from "react";
import { AnimatedText } from "../sections-part/AnimatedText";
import ButtonPositionAware from "../sections-part/ButtonPositionAware";
import AnimateInViews from "../layout/AnimateInViews";
import useScrollToSection from "../layout/header/useScrollToSection";

export default function SectionHero() {
    const { scrollToSection } = useScrollToSection()

    const randomImage = `https://picsum.photos/1920/1080?random=${Math.floor(
        Math.random() * 1000
    )}`;

    return (
        <section
            id="hero"
            className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center text-white"
            style={{
                backgroundImage: `url(${randomImage})`,
                backgroundAttachment: "fixed",
            }}
        >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/50 to-black/50 z-10" />

            {/* Content Container */}
            <div className="custom-container relative z-20 text-left">
                {/* Animated Text */}
                <AnimatedText />

                <AnimateInViews direction="up">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-2xl">
                        Hi, I am Abdullah
                    </h1>
	            </AnimateInViews>
                <AnimateInViews direction="up" delay={.5}>
                    <p className="hidden sm:block text-lg md:text-2xl mb-10 max-w-4xl">
                        I'm a full stack web developer focused on building fast, clean, and scalable applications. I help businesses grow online by delivering modern, user-friendly digital experiences tailored to their needs.
                    </p>

                </AnimateInViews>
                <AnimateInViews direction="up" delay={.8}>
                    <ButtonPositionAware onClick={() => scrollToSection("about")}  text="Hire Me" />
                </AnimateInViews>
            </div>
        </section>
    );
}

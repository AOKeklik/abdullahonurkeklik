import React, { useState, useEffect } from "react"
import { Plus, LinkIcon, X } from "lucide-react"

import Heading from "../sections-part/Heading"
import AnimateInViews from "../layout/AnimateInViews"

const images = [
    {
        img: "/blog.jpg",
        url: "https://wybieramlokalne.pl/",
    },
    {
        img: "/kukies.jpg",
        url: "https://panikuki.lewiatan.pl/",
    },
    {
        img: "/maxim.jpg",
        url: "https://maxim.lewiatan.pl/",
    },
];

export default function SectionLewiatan() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedImage]);

    return (
        <section 
            id="lewiatan"
            className="py-16"
        >
            <div className="custom-container flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Side Text */}
                <div className="lg:w-1/2 space-y-6">
                    <AnimateInViews direction="up">
                        <Heading text="lewiatan projects" />
                    </AnimateInViews>
                    
                    <AnimateInViews direction="up" delay={0.3}>
                        <p className="text-muted-foreground text-lg mb-5">
                            Leviatan is one of the most well-known and widely recognized supermarket
                            chains in Poland, with locations across the country. I developed a tailored
                            web solution for the brand, focusing on performance and accessibility.
                        </p>
                    </AnimateInViews>

                    <AnimateInViews direction="up" delay={0.5}>
                        <p className="text-muted-foreground text-lg">
                            The application was built using PHP, MySQL, and jQuery, ensuring stable
                            integration with existing systems and smooth user experience. From product
                            listings to internal content management, the platform is designed to be
                            both intuitive and robust — supporting Leviatan's retail presence online.
                        </p>
                    </AnimateInViews>
                </div>

                {/* Right Side Boxes */}
                <div className="w-full lg:w-1/2 relative">
                    {/* Mobile/Tablet Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:hidden gap-6">
                        {images.map((img, idx) => (
                            <AnimateInViews key={idx} direction="up" delay={idx * 0.5}>
                                <a
                                    href={img.url}
                                    target="_blank"
                                     rel="noopener noreferrer"
                                    className="relative block group overflow-hidden rounded-lg shadow-md"
                                >
                                    <img src={img.img} alt={`Leviatan ${idx}`} className="w-full h-full" />
                                    <div className="absolute inset-0 bg-red-600 opacity-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center space-x-4">
                                        <button
                                            onClick={(e) => {
                                                    e.preventDefault()
                                                    setSelectedImage(img.img)
                                                }}
                                            className="text-white p-2 hover:scale-110 transition cursor-pointer"
                                        >
                                            <Plus strokeWidth={3} className="w-8 h-8" />
                                        </button>
                                        <button
                                            className="text-white p-2 hover:scale-110 transition cursor-pointer"
                                        >
                                            <LinkIcon strokeWidth={3} className="w-8 h-8" />
                                        </button>
                                    </div>
                                </a>
                            </AnimateInViews>
                        ))}
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:block relative">
                        {images.map((img, idx) => {
                            const positions = [
                                "-top-30 left-15",
                                "-top-20 left-85",
                                "top-5 left-40",
                            ]
                            return (
                                <AnimateInViews key={idx} direction="up" delay={idx * 0.5}>
                                    <a
                                        href={img.url}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={`absolute ${positions[idx % positions.length]} group w-48 h-48 overflow-hidden rounded-lg shadow-md`}
                                    >
                                        <img
                                            src={img.img}
                                            alt={`Leviatan ${idx}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-red-600 opacity-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center space-x-4">
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setSelectedImage(img.img)
                                                }}
                                                className="text-white p-2 hover:scale-110 transition cursor-pointer"
                                            >
                                                <Plus strokeWidth={3} className="w-8 h-8" />
                                            </button>
                                            <button
                                                className="text-white p-2 hover:scale-110 transition cursor-pointer"
                                            >
                                                <LinkIcon strokeWidth={3} className="w-8 h-8" />
                                            </button>
                                        </div>
                                    </a>
                                </AnimateInViews>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Custom Fullscreen Overlay Preview */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                    >
                        <X className="w-8 h-8" strokeWidth={3} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-w-[750px] max-h-[500px] w-full object-contain"
                    />
                </div>
            )}
        </section>
    );
}

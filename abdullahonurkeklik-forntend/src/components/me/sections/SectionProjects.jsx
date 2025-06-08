'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Plus, Link2, X } from 'lucide-react'
import Heading from '../sections-part/Heading'
import { useState } from 'react';
import AnimateInViews from '../layout/AnimateInViews';
import { Button } from '@/components/ui/button';
import ButtonPrimary from '../sections-part/ButtonPrimary';

const projects = [
    {
        img: "/github.png",
        url: "https://github.com/AOKeklik/The-Store-Threadly",
        category: "Laravel&React",
    },
    {
        img: "/kukies.jpg",
        url: "https://panikuki.lewiatan.pl/",
        category: "PHP&Jquery",
    },
    {
        img: "/maxim.jpg",
        url: "https://maxim.lewiatan.pl/",
        category: "Designs",
    },
];

const categories = ["Laravel&React", "PHP&Jquery", "Designs"];


export default function AllProjectsSection() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <section id="projects" className="py-16">
            <div className='custom-container'>
                <div className="text-center mb-12">
                    <AnimateInViews direction="up">
                        <Heading text="all projects" className='mb-5' />
                    </AnimateInViews>

                    <AnimateInViews direction="up" delay={.3}>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base">
                        Explore a curated collection of creative, functional, and visually compelling projects.
                        </p>
                    </AnimateInViews>
                </div>

                {/* buttons */}
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-8">
                    <AnimateInViews direction="up" delay={.3}>
                        <ButtonPrimary 
                            text='All' 
                            onClick={() => setActiveCategory(null)}
                            className={`px-4 py-2 rounded-full border cursor-pointer ${
                                activeCategory === null
                                ? "bg-black text-white"
                                : "bg-white text-black hover:bg-gray-200"
                            } transition`}
                        />
                    </AnimateInViews>
                    {categories.map((cat, index) => (
                        <AnimateInViews key={index} direction="up" delay={index * .3}>
                            <ButtonPrimary 
                                text={cat} 
                                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                                className={`px-4 py-2 rounded-full border cursor-pointer ${
                                    activeCategory === cat
                                    ? "bg-black text-white"
                                    : "bg-white text-black hover:bg-gray-200"
                                } transition`}
                            />
                        </AnimateInViews>
                    ))}
                </div>

                {/* boxs */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                        .filter((project) => activeCategory ? project.category === activeCategory : true)
                        .map((project, index) => (
                            <AnimateInViews key={index} direction="up" delay={index * .3}>
                                <a 
                                    href={project.url}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <Card key={project.id} className="relative group overflow-hidden rounded-2xl p-0">
                                        <img
                                            src={project.img}
                                            alt={`Project ${project.id}`}
                                            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    
                                        <CardContent className="absolute inset-0 bg-red-600 opacity-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center space-x-4">
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setSelectedImage(project.img)
                                                }}
                                                className="text-white p-2 hover:scale-110 transition cursor-pointer"
                                            >
                                                <Plus strokeWidth={3} className="w-8 h-8" />
                                            </button>
                                            <button
                                                className="text-white p-2 hover:scale-110 transition cursor-pointer opacity-100"
                                            >
                                                <Link2 strokeWidth={3} className="w-8 h-8" />
                                            </button>
                                        </CardContent>
                                    </Card>
                                </a>
                            </AnimateInViews>
                    ))}
                </div>
            </div>

            {/* Custom Fullscreen Overlay Preview */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4">
                    <Button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 cursor-pointer"
                    >
                        <X className="w-8 h-8" strokeWidth={3} />
                    </Button>
                    <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-w-[750px] max-h-[500px] w-full object-contain"
                    />
                </div>
            )}
        </section>
    )
}

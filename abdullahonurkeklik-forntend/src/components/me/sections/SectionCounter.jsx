"use client"

import React, { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Laptop2, Users, Clock, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimateInViews from "../layout/AnimateInViews"

const counters = [
    { title: "Projects Completed Remotely", number: 48, icon: Laptop2 },
    { title: "Projects Completed On-Site", number: 25, icon: Briefcase },
    { title: "Active Clients (Freelance & Startup)", number: 6, icon: Users },
    { title: "Years of Professional Experience", number: 4, icon: Clock },
]

export default function SectionCounter() {
    return (
        <section className="bg-slate-100 rounded-xl py-16">
            <div className="custom-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {counters.map(({ title, number, icon }, i) => (
                    <AnimateInViews key={i} direction="up" delay={i * .3}>
                        <CounterItem title={title} number={number} icon={icon} />
                    </AnimateInViews>
                ))}
            </div>
        </section>
    )
}

const CounterItem = ({ title, number, icon: Icon }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (isInView) {
            let start = 0
            const duration = 2000
            const increment = number / (duration / 20)

            const counter = setInterval(() => {
                start += increment
                if (start >= number) {
                    setCount(number)
                    clearInterval(counter)
                } else {
                    setCount(Math.ceil(start))
                }
            }, 20)

            return () => clearInterval(counter)
        }
    }, [isInView, number])

    return (
        <div ref={ref}>
            <Card className="rounded-2xl shadow-md bg-white hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="flex flex-col items-center py-6 px-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                        <div className="bg-red-00 text-red-600 p-3 rounded-full">
                            <Icon className="w-15 h-15" />
                        </div>
                        <div className="text-5xl font-bold text-gray-600">
                            {count}+
                        </div>
                    </div>
                    <p className="text-gray-500 mt-2 text-md">{title}</p>
                </CardContent>
            </Card>
        </div>
    )
}

import React from 'react'
import { Code2, Wrench, Headset } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import AnimateInViews from '../layout/AnimateInViews'
import useServices from '@/hook/useServices'
import Loader from '../layout/Loader'

const iconMap = {
    code2: <Code2 className="w-8 h-8 text-primary" />,
    wrench: <Wrench className="w-8 h-8 text-primary" />,
    headset: <Headset className="w-8 h-8 text-primary" />,
};

export default function SectionServices() {
    const { services, isLoadingService } = useServices()

    return (
        <section 
            id="services"
            className="py-16"
        >
            <div className="custom-container">
                {isLoadingService ? (
                    <Loader fullHeight={false} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center gap-6">
                        {services.map((service, index) => (
                            <AnimateInViews key={index} direction="up" delay={index * .3}>
                                <Card className="w-full max-w-md transition hover:shadow-md">
                                    <CardContent className="p-6 text-center space-y-3">
                                        <div className="flex justify-center">{iconMap[service.icon]}</div>
                                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                                        <p className="text-sm text-muted-foreground">{service.desc}</p>
                                    </CardContent>
                                </Card>
                            </AnimateInViews>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

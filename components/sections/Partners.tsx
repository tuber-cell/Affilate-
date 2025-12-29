"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

interface Partner {
    id: string
    name: string
    logo: string
    className?: string
}

const partners: Partner[] = [
    {
        id: "tcs",
        name: "TCS",
        logo: "/logos/tcs.png",
        className: "h-20 w-auto",
    },
    {
        id: "akzonobel",
        name: "AkzoNobel",
        logo: "/logos/akzonobel.png",
        className: "h-16 w-auto",
    },
    {
        id: "nielseniq",
        name: "NielsenIQ",
        logo: "/logos/nielseniq.png",
        className: "h-16 w-auto",
    },
    {
        id: "fis",
        name: "FIS",
        logo: "/logos/fis.png",
        className: "h-16 w-auto",
    },
    {
        id: "karvy",
        name: "Karvy Stock Broking",
        logo: "/logos/karvy.png",
        className: "h-16 w-auto",
    },
    {
        id: "sopra-steria",
        name: "Sopra Steria",
        logo: "/logos/sopra-steria.png",
        className: "h-16 w-auto",
    },
    {
        id: "tcs-2",
        name: "TCS",
        logo: "/logos/tcs.png",
        className: "h-20 w-auto",
    },
    {
        id: "akzonobel-2",
        name: "AkzoNobel",
        logo: "/logos/akzonobel.png",
        className: "h-16 w-auto",
    },
]

export function Partners() {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-black/60">
                        Proud to have worked with these exceptional organizations
                    </p>
                </div>

                <div className="relative">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[
                            AutoScroll({
                                playOnInit: true,
                                speed: 1,
                                stopOnInteraction: false,
                                stopOnMouseEnter: true,
                            })
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="ml-0">
                            {partners.map((partner) => (
                                <CarouselItem
                                    key={partner.id}
                                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                                >
                                    <div className="mx-6 flex shrink-0 items-center justify-center p-6">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className={`${partner.className} object-contain`}
                                            loading="eager"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {/* Fade edges */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
                </div>
            </div>
        </section>
    )
}

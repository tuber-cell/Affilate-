"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
    {
        text: "Saurabh's strategic vision transformed our financial outlook. His ability to navigate complex markets is unmatched.",
        name: "Zubair Malik",
        position: "Director",
        company: "Global Ventures",
    },
    {
        text: "A true leader who empowers his team. Working with Saurabh has been a masterclass in operational excellence.",
        name: "Rouzbeh Khazaneh",
        position: "CTO",
        company: "Tech Innovations",
    },
    {
        text: "His insights into branding and market positioning helped us achieve record growth in just two quarters.",
        name: "Daniel Mason",
        position: "VP Marketing",
        company: "Creative Solutions",
    },
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-royal-blue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-deep-purple/10 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Stories</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Voices of trust and partnership.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="relative min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="text-center px-8 md:px-16"
                            >
                                <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />
                                <p className="text-2xl md:text-3xl font-light italic text-white/90 mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].text}"
                                </p>
                                <div>
                                    <h4 className="text-xl font-bold text-gold">{testimonials[currentIndex].name}</h4>
                                    <p className="text-white/60">
                                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="flex gap-2 items-center">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-gold" : "bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

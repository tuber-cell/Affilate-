"use client"

import { motion } from "framer-motion"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            <div className="absolute inset-0 opacity-20">
                <WebGLShader />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-sm font-medium text-gold tracking-wider uppercase">
                        Innovating Wealth | Empowering Life
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black mb-6"
                >
                    SK 360 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-black to-gold animate-gradient">Dynamics</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-black/70 max-w-3xl mb-8 font-light"
                >
                    Your Strategic Partner for Career, Finance, and Business Growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-3 mb-12 text-sm md:text-base text-black/60"
                >
                    {["Career Consultation", "Financial Planning", "Insurance Advisory", "Real Estate", "Branding & Marketing"].map((item, index) => (
                        <span key={index} className="flex items-center">
                            {index > 0 && <span className="mx-2 opacity-30">•</span>}
                            {item}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <LiquidButton size="xl" className="text-white bg-black hover:bg-black/90 shadow-lg shadow-black/20" href="/consultation">
                        Book Consultation
                    </LiquidButton>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-black/30"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>
        </section>
    )
}

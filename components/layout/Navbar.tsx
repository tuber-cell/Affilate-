"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Experience", href: "/#experience" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 border-b border-black/10 shadow-sm" : "bg-white/60 backdrop-blur-sm py-6"
                }`}
        >
            <div className="container px-4 md:px-6 mx-auto flex items-center justify-center relative">
                <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-black/70 hover:text-gold transition-colors whitespace-nowrap"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block absolute right-4 md:right-6 top-1/2 -translate-y-1/2">
                    <LiquidButton size="sm" className="bg-black hover:bg-black/90 text-white" href="/consultation">
                        Book Consultation
                    </LiquidButton>
                </div>
            </div>
        </motion.nav>
    )
}

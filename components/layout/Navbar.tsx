"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 border-b border-black/10 shadow-sm" : "bg-white/60 backdrop-blur-sm py-6"
                    }`}
            >
                <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
                    <a href="#" className="flex items-center">
                        <img
                            src="/sk360-logo.jpg"
                            alt="SK 360 Dynamics"
                            className="h-12 w-auto"
                        />
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-black/70 hover:text-gold transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <LiquidButton size="sm" className="bg-black hover:bg-black/90 text-white" href="/consultation">
                            Book Consultation
                        </LiquidButton>
                    </div>

                    <button
                        className="md:hidden text-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-medium text-black hover:text-gold transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <LiquidButton className="w-full mt-4 bg-black text-white" href="/consultation">
                                Book Consultation
                            </LiquidButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

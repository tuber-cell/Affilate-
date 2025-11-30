"use client"

import { motion } from "framer-motion"
import { Briefcase, TrendingUp, Shield, Home, Megaphone, Landmark, Users, LineChart } from "lucide-react"

const services = [
    {
        icon: Briefcase,
        title: "Career Consultation",
        description: "Guidance to navigate your professional path and achieve career goals.",
    },
    {
        icon: Users,
        title: "Job Placement & Assistance",
        description: "Connecting talent with the right opportunities for growth.",
    },
    {
        icon: TrendingUp,
        title: "Business Consultation",
        description: "Strategic advice to scale your business and improve operations.",
    },
    {
        icon: LineChart,
        title: "Financial Planning",
        description: "Comprehensive financial management and wealth creation strategies.",
    },
    {
        icon: Shield,
        title: "Insurance Advisory",
        description: "Protecting what matters most with tailored insurance solutions.",
    },
    {
        icon: Home,
        title: "Real Estate Channel Partner",
        description: "Expert guidance for buying, selling, and investing in real estate.",
    },
    {
        icon: Landmark,
        title: "DSA for Loans",
        description: "Simplifying the loan process for personal and business needs.",
    },
    {
        icon: Megaphone,
        title: "Branding & Marketing",
        description: "Building strong brands and effective advertising campaigns.",
    },
]

export function Services() {
    return (
        <section className="py-20 md:py-32 bg-gray-50 text-black" id="services">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-black/60 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your unique needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group p-8 rounded-2xl border border-black/5 bg-white shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-gold/10 transition-all"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-royal-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-7 h-7 text-gold" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-black">{service.title}</h3>
                            <p className="text-black/70 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

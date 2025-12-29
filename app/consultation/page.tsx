"use client"

import { motion } from "framer-motion"
import { ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

const services = [
    {
        title: "Career Consultation",
        description: "Expert guidance to navigate your career path and achieve professional growth.",
        color: "from-blue-600 to-blue-800"
    },
    {
        title: "Job Placement & Assistance",
        description: "Connecting you with the right opportunities to kickstart or advance your career.",
        color: "from-purple-600 to-purple-800"
    },
    {
        title: "Business Consultation",
        description: "Strategic advice to optimize operations and drive business success.",
        color: "from-amber-700 to-amber-900"
    },
    {
        title: "Financial Planning",
        description: "Comprehensive financial strategies for wealth creation and security.",
        color: "from-slate-600 to-slate-800"
    },
    {
        title: "Insurance Consultant",
        description: "Tailored insurance solutions to protect what matters most to you.",
        color: "from-indigo-600 to-indigo-800"
    },
    {
        title: "Real Estate Channel Partner & Consultant",
        description: "Expert real estate advice for buying, selling, and investing.",
        color: "from-pink-600 to-pink-800"
    },
    {
        title: "DSA for all types of Loan",
        description: "Hassle-free assistance for Personal, Home, and Business loans.",
        color: "from-sky-600 to-sky-800"
    },
    {
        title: "Branding, Advertisement & Marketing",
        description: "Creative solutions to elevate your brand presence and reach.",
        color: "from-orange-600 to-orange-800"
    }
]

export default function ConsultationPage() {
    const handleServiceClick = (serviceName: string) => {
        const message = encodeURIComponent(`Hey I am interested in ${serviceName}`)
        window.open(`https://wa.me/918806941197?text=${message}`, '_blank')
    }

    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-black/60 hover:text-black transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-black to-gold animate-gradient">Consultation</span>
                        </h1>
                        <p className="text-lg text-black/60">
                            Choose a service below to start a conversation with us on WhatsApp. We are ready to assist you.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => handleServiceClick(service.title)}
                            className="group relative bg-white border border-black/5 rounded-2xl p-6 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />

                            <div className="mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-black/60 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex items-center text-sm font-medium text-black/40 group-hover:text-gold transition-colors mt-auto pt-4 border-t border-black/5">
                                Connect on WhatsApp <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-black/40 text-sm">
                        Need help choosing? <button onClick={() => handleServiceClick("General Inquiry")} className="text-gold hover:underline font-medium">Contact us for general inquiry</button>
                    </p>
                </motion.div>
            </div>
        </main>
    )
}

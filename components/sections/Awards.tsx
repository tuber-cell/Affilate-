"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star } from "lucide-react"

const awards = [
    {
        title: "CFO Award for Excellent Work",
        year: "2024",
        icon: Trophy,
        color: "text-gold",
    },
    {
        title: "Silver Award for Q2 2022",
        year: "2022",
        icon: Star,
        color: "text-white", // Silver
    },
    {
        title: "3 Cheers Award",
        year: "2021",
        icon: Award,
        color: "text-royal-blue",
    },
    {
        title: "Appreciation Certificate",
        year: "2020",
        icon: Award,
        color: "text-deep-purple",
    },
]

export function Awards() {
    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Celebrating milestones of excellence and dedication.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center text-center hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <award.icon className={`w-8 h-8 ${award.color}`} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{award.title}</h3>
                            <p className="text-white/50 font-mono text-sm">{award.year}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

import { motion } from "framer-motion"
import { User, Lightbulb, Users, Brain, Zap } from "lucide-react"

const qualities = [
    {
        icon: User,
        title: "Leadership",
        description: "Guiding teams with vision and empathy to achieve collective goals.",
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "Turning complex challenges into innovative solutions.",
    },
    {
        icon: Users,
        title: "Team Management",
        description: "Fostering collaboration and maximizing individual potential.",
    },
    {
        icon: Brain,
        title: "Critical Thinking",
        description: "Analyzing situations deeply to make informed strategic decisions.",
    },
    {
        icon: Zap,
        title: "Self-Confidence",
        description: "Embracing risks and leading with conviction.",
    },
]

export function About() {
    return (
        <section className="py-20 md:py-32 bg-white text-black relative overflow-hidden" id="about">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-black/60">
                            About SK 360 Dynamics
                        </h2>
                        <div className="space-y-6 text-lg text-black/70 leading-relaxed">
                            <p>
                                Founded by <a href="https://in.linkedin.com/in/saurabh-kulkarni-6b4310173" target="_blank" rel="noopener noreferrer" className="text-gold font-semibold hover:underline">Saurabh Kulkarni</a>, SK 360 Dynamics is a premier consultancy firm dedicated to holistic growth.
                            </p>
                            <p>
                                We believe in taking smart risks, playing bold, and leveraging technology to unlock new opportunities for individuals and businesses alike.
                            </p>
                            <p className="text-xl font-medium text-black">
                                Innovating Wealth | Empowering Life.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden border border-black/5 shadow-2xl shadow-black/5 bg-white flex items-center justify-center"
                    >
                        <img
                            src="/sk360-logo.jpg"
                            alt="SK 360 Dynamics"
                            className="w-3/4 h-auto object-contain"
                        />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {qualities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="p-6 rounded-xl border border-black/5 bg-white shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-gold/5 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                                <item.icon className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                            <p className="text-black/60">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

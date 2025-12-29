"use client"

import { motion } from "framer-motion"

const skills = [
    "Data Analysis",
    "Transition Management",
    "CAS Audit",
    "General Ledgers",
    "Stakeholder Management",
    "Business Relationship Management",
    "Communication",
    "Team Building",
    "Easily Adaptable",
]

export function Skills() {
    return (
        <section className="py-20 bg-zinc-950 text-white border-t border-white/5">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Competencies</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        A diverse skillset honed through years of experience.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/30 transition-all cursor-default"
                        >
                            <span className="text-lg font-medium text-white/80 hover:text-white transition-colors">
                                {skill}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

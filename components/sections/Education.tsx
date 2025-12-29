"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Academic foundation and continuous learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center text-center hover:border-gold/30 transition-colors"
                    >
                        <div className="w-16 h-16 rounded-full bg-royal-blue/20 flex items-center justify-center mb-6">
                            <GraduationCap className="w-8 h-8 text-royal-blue" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">MBA in Finance</h3>
                        <p className="text-lg text-white/80 mb-1">Indira School of Business Studies</p>
                        <p className="text-white/50 font-mono text-sm">2017 – 2019</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center text-center hover:border-gold/30 transition-colors"
                    >
                        <div className="w-16 h-16 rounded-full bg-deep-purple/20 flex items-center justify-center mb-6">
                            <Award className="w-8 h-8 text-deep-purple" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Commerce</h3>
                        <p className="text-lg text-white/80 mb-1">Pratibha Group of Institutes</p>
                        <p className="text-white/50 font-mono text-sm">2014 – 2017</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

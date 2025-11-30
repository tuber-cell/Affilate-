"use client"

import { motion } from "framer-motion"
import { Building2, Award } from "lucide-react"

const experience = [
    {
        role: "Gen Z CEO, CFO, CTO & CMO",
        company: "SK 360 Dynamics",
        period: "2025 – Present",
        description: "Leading the vision and strategy for a multi-faceted consultancy firm.",
        awards: [],
    },
    {
        role: "R2R Specialist",
        company: "AkzoNobel",
        period: "2023 – 2025",
        description: "Specialized in Record to Report processes and financial accuracy.",
        awards: ["CFO Award for Excellent Work"],
    },
    {
        role: "Senior Fixed Asset Associate",
        company: "NielsenIQ",
        period: "2022 – 2023",
        description: "Managed fixed assets and global financial controlling tasks.",
        awards: ["Silver Award for Q2 2022"],
    },
    {
        role: "Fixed Assets Associate",
        company: "NielsenIQ",
        period: "2020 – 2022",
        description: "Handled global financial controlling and asset management.",
        awards: ["3 Cheers Award"],
    },
    {
        role: "Senior Process Executive",
        company: "Sopra Steria",
        period: "2019 – 2020",
        description: "Executed key financial processes and ensured compliance.",
        awards: [],
    },
    {
        role: "Senior Accounting Associate",
        company: "FIS",
        period: "2019",
        description: "Managed accounting operations and financial reporting.",
        awards: [],
    },
]

export function Experience() {
    return (
        <section className="py-20 md:py-32 bg-white text-black relative" id="experience">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership & Expertise</h2>
                    <p className="text-black/60 max-w-2xl mx-auto">
                        Built on a foundation of excellence and innovation
                    </p>
                </motion.div>

                {/* Founder Profile Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto mb-20 p-8 md:p-12 rounded-2xl border border-black/5 bg-gradient-to-br from-white to-gray-50 shadow-xl"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-gold/30 shadow-xl">
                            <img
                                src="/founder.jpg"
                                alt="Saurabh Kulkarni - Founder & CEO"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gold to-royal-blue">
                                Saurabh Kulkarni
                            </h3>
                            <p className="text-xl text-black/70 mb-4 font-medium">Founder & CEO</p>
                            <p className="text-black/70 leading-relaxed mb-4">
                                With over a decade of experience across leading global organizations including <span className="font-semibold text-black">TCS, AkzoNobel, NielsenIQ, Sopra Steria, and FIS</span>, Saurabh brings a wealth of expertise in business strategy, technology, and financial planning.
                            </p>
                            <p className="text-black/70 leading-relaxed">
                                His vision for SK 360 Dynamics is to create a holistic consultancy that empowers individuals and businesses to achieve sustainable growth through innovative solutions and strategic guidance.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Experience Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent transform md:-translate-x-1/2 ml-8 md:ml-0" />

                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
                                    }`}
                            >
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-white transform md:-translate-x-1/2 translate-y-1.5 ml-[26px] md:ml-0 z-10 shadow-lg shadow-gold/30" />

                                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                    <div className="p-6 rounded-2xl border border-black/5 bg-white shadow-md shadow-black/5 hover:shadow-lg hover:shadow-gold/5 transition-all">
                                        <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                            <Building2 className="w-5 h-5 text-gold" />
                                            <span className="text-sm font-medium text-black/50">{item.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-1">{item.role}</h3>
                                        <h4 className="text-lg text-royal-blue font-medium mb-3">{item.company}</h4>
                                        <p className="text-black/70 mb-4">{item.description}</p>

                                        {item.awards.length > 0 && (
                                            <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                                {item.awards.map((award, i) => (
                                                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium border border-gold/20">
                                                        <Award className="w-3 h-3" />
                                                        {award}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

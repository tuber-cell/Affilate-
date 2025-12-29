"use client"

import { motion } from "framer-motion"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"

export function Contact() {
    return (
        <section className="py-20 md:py-32 bg-zinc-950 text-white relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
                        <p className="text-white/60 text-lg mb-12">
                            Ready to innovate your wealth and empower your life? Reach out for a consultation or collaboration.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-royal-blue/20 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-royal-blue" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                                    <p className="text-white/60">contact@sk360dynamics.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Phone / WhatsApp</h3>
                                    <p className="text-white/60">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-deep-purple/20 flex items-center justify-center shrink-0">
                                    <Linkedin className="w-6 h-6 text-deep-purple" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
                                    <p className="text-white/60">linkedin.com/in/saurabh-kulkarni</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Location</h3>
                                    <p className="text-white/60">Pune, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-white placeholder:text-white/20"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-white placeholder:text-white/20"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-white placeholder:text-white/20"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-white placeholder:text-white/20 resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <LiquidButton className="w-full text-white bg-gold/20 hover:bg-gold/30 border-gold/30" size="xl">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </LiquidButton>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

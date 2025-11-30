"use client"

import { motion } from "framer-motion"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"

export function Contact() {
    return (
        <section className="py-20 md:py-32 bg-zinc-950 text-white relative" id="contact">
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
                                <a href="mailto:sk360dynamics@gmail.com" className="w-12 h-12 rounded-full bg-royal-blue/20 flex items-center justify-center shrink-0 hover:bg-royal-blue/30 transition-colors">
                                    <Mail className="w-6 h-6 text-royal-blue" />
                                </a>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                                    <p className="text-white/60">sk360dynamics@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <a href="tel:+918806941197" className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0 hover:bg-gold/30 transition-colors">
                                    <Phone className="w-6 h-6 text-gold" />
                                </a>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Phone / WhatsApp</h3>
                                    <a href="tel:+918806941197" className="text-white/60 hover:text-gold transition-colors">+91 88069 41197</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <a href="https://in.linkedin.com/in/saurabh-kulkarni-6b4310173" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-deep-purple/20 flex items-center justify-center shrink-0 hover:bg-deep-purple/30 transition-colors">
                                    <Linkedin className="w-6 h-6 text-deep-purple" />
                                </a>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
                                    <a href="https://in.linkedin.com/in/saurabh-kulkarni-6b4310173" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">Saurabh Kulkarni</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <a href="https://www.instagram.com/sk360dynamics?igsh=MXJ6c3ZscWRnc2FrbA==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 hover:bg-pink-500/30 transition-colors">
                                    {/* Using Linkedin icon temporarily if Instagram is not imported, but it is imported in Footer. Need to import it here. */}
                                    {/* Wait, I need to check imports. */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6 text-pink-500"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </a>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Instagram</h3>
                                    <a href="https://www.instagram.com/sk360dynamics?igsh=MXJ6c3ZscWRnc2FrbA==" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">@sk360dynamics</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Location</h3>
                                    <p className="text-white/60">Laxmi Heights, Mangaldas Marg, near bhosale petrol pump, near vivesta society, Chikhali CDC, Purnanagar, Chinchwad, Pimpri-Chinchwad, Pune, Maharashtra 411019</p>
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
                        <form action="https://formsubmit.co/sk360dynamics@gmail.com" method="POST" className="space-y-6">
                            <input type="hidden" name="_subject" value="New Contact Request - SK 360 Dynamics" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-white placeholder:text-white/20"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-white placeholder:text-white/20"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-white placeholder:text-white/20"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
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

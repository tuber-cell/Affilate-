"use client"

import { Linkedin, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="/" className="text-2xl font-bold text-white tracking-tighter mb-4 block">
                            SK 360 <span className="text-gold">Dynamics</span>
                        </a>
                        <p className="text-white/60 max-w-sm mb-4">
                            Innovating Wealth | Empowering Life.
                        </p>
                        <p className="text-white/60 max-w-sm">
                            Laxmi Heights, Mangaldas Marg, near bhosale petrol pump, near vivesta society, Chikhali CDC, Purnanagar, Chinchwad, Pimpri-Chinchwad, Pune, Maharashtra 411019
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/#about" className="text-white/60 hover:text-gold transition-colors">About</a></li>
                            <li><a href="/#services" className="text-white/60 hover:text-gold transition-colors">Services</a></li>
                            <li><a href="/#experience" className="text-white/60 hover:text-gold transition-colors">Experience</a></li>
                            <li><a href="/#contact" className="text-white/60 hover:text-gold transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://in.linkedin.com/in/saurabh-kulkarni-6b4310173" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/sk360dynamics?igsh=MXJ6c3ZscWRnc2FrbA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="mailto:sk360dynamics@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="tel:+918806941197" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all">
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} SK 360 Dynamics. All rights reserved.</p>
                    <p>Designed with excellence.</p>
                </div>
            </div>
        </footer>
    )
}

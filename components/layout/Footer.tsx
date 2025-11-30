"use client"

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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

                    <div className="space-y-4">
                        <div className="border-l-2 border-gold pl-4">
                            <div className="text-3xl font-bold text-gold">15+</div>
                            <div className="text-sm text-white/60">Years Experience</div>
                        </div>
                        <div className="border-l-2 border-gold pl-4">
                            <div className="text-3xl font-bold text-gold">500+</div>
                            <div className="text-sm text-white/60">Clients Served</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="border-l-2 border-gold pl-4">
                            <div className="text-3xl font-bold text-gold">360°</div>
                            <div className="text-sm text-white/60">Solutions</div>
                        </div>
                        <div className="border-l-2 border-gold pl-4">
                            <div className="text-3xl font-bold text-gold">100%</div>
                            <div className="text-sm text-white/60">Commitment</div>
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

import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowRight, Instagram, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#' },
        { name: 'Sobre Nós', href: '#sobre' },
        { name: 'Nossos Serviços', href: '#servicos' },
        { name: 'Depoimentos', href: '#depoimentos' },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        },
        opened: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        },
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <a href="/" className="flex items-center group">
                    <img
                        src="/logo.png"
                        alt="Indústria de Óculos"
                        className={`transition-all duration-500 group-hover:scale-105 ${scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'} w-auto`}
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-secondary font-bold text-sm uppercase tracking-[0.2em] hover:text-primary transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5571988186767"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 py-3 px-8 text-xs font-black uppercase tracking-widest bg-gradient-to-r from-primary to-accent border-none"
                    >
                        <MessageCircle size={16} />
                        Agendar Agora
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="relative group p-4 bg-secondary text-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        <Menu size={28} className="relative z-10" />
                    </button>
                </div>
            </div>

            {/* Modern Mobile Menu Fullscreen Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        className="fixed inset-0 h-screen w-full bg-secondary z-[70] flex flex-col items-center justify-center p-8 lg:hidden overflow-hidden"
                    >
                        {/* Artistic Background Decoration */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px] animate-pulse" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                        </div>

                        {/* Menu Header */}
                        <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-10">
                            <img src="/logo.png" alt="Logo" className="h-12 w-auto brightness-0 invert" />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white ring-1 ring-white/20 hover:bg-white/20 transition-all"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px bg-white/20 flex-1"></div>
                                <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase">Explorar</span>
                                <div className="h-px bg-white/20 flex-1"></div>
                            </div>

                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * idx + 0.3 }}
                                    className="group flex items-center justify-between p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-primary transition-all duration-300 overflow-hidden relative"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="text-white/20 group-hover:text-white/40 font-black italic text-xl">0{idx + 1}</span>
                                        <span className="text-xl font-bold text-white tracking-widest uppercase">{link.name}</span>
                                    </div>
                                    <ArrowRight className="text-white/40 group-hover:text-white translate-x-4 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />

                                    {/* Subtle Gradient Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </motion.a>
                            ))}

                            <div className="mt-8 flex flex-col gap-4">
                                <a
                                    href="https://wa.me/5571988186767"
                                    className="btn-whatsapp w-full py-6 rounded-3xl text-lg font-black bg-gradient-to-r from-whatsapp to-green-400 group relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3 italic">
                                        <Sparkles size={20} className="animate-spin" />
                                        Falar com Especialista
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                                </a>

                                <div className="flex justify-center gap-6 mt-6">
                                    <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"><Instagram size={20} /></a>
                                    <a href="tel:7133718478" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"><Phone size={20} /></a>
                                    <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"><MapPin size={20} /></a>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Brand Mark */}
                        <div className="absolute bottom-12 text-white/10 font-black text-6xl pointer-events-none select-none italic">
                            ÓTICA PREMIUM
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

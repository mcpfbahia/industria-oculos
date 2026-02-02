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
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                when: "afterChildren"
            }
        },
        opened: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        },
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        opened: { opacity: 1, x: 0 }
    };

    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <a href="/" className="flex items-center group">
                    <img
                        src="/logo-original.png"
                        alt="Indústria de Óculos"
                        className={`transition-all duration-500 group-hover:scale-105 ${scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'} w-auto object-contain brightness-110 contrast-125`}
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
                        className="btn-primary flex items-center gap-2 py-3 px-8 text-xs font-black uppercase tracking-widest bg-gradient-to-r from-primary to-accent border-none shadow-xl"
                    >
                        <MessageCircle size={16} />
                        Agendar Agora
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Abrir Menu"
                        className="p-4 bg-secondary text-white rounded-2xl shadow-xl hover:bg-primary transition-all active:scale-90"
                    >
                        <Menu size={28} />
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
                        className="fixed inset-0 h-screen w-full bg-secondary z-[999] flex flex-col items-center justify-center p-8 lg:hidden overflow-hidden"
                    >
                        {/* Artistic Background Decoration */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px] animate-pulse" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                        </div>

                        {/* Menu Header with original logo and CLOSE button */}
                        <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-[1000]">
                            <img
                                src="/logo-original.png"
                                alt="Logo Original"
                                className="h-16 w-auto brightness-0 invert contrast-200"
                            />
                            <button
                                onClick={closeMenu}
                                aria-label="Fechar Menu"
                                className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white ring-1 ring-white/20 hover:bg-red-500/20 hover:ring-red-500 transition-all active:scale-90 cursor-pointer shadow-2xl"
                            >
                                <X size={36} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Navigation Container */}
                        <div className="relative z-[1000] w-full max-w-sm flex flex-col gap-5 mt-12">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-px bg-white/10 flex-1"></div>
                                <span className="text-[10px] font-black tracking-[0.5em] text-white/30 uppercase">Explorar</span>
                                <div className="h-px bg-white/10 flex-1"></div>
                            </div>

                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMenu}
                                    variants={itemVariants}
                                    className="group flex items-center justify-between p-5 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md hover:bg-primary transition-all duration-300"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="text-white/20 group-hover:text-white/40 font-black italic text-lg tracking-tighter">0{idx + 1}</span>
                                        <span className="text-lg font-bold text-white tracking-[0.15em] uppercase">{link.name}</span>
                                    </div>
                                    <ArrowRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                                </motion.a>
                            ))}

                            <div className="mt-6 flex flex-col gap-4">
                                <a
                                    href="https://wa.me/5571988186767"
                                    onClick={closeMenu}
                                    className="w-full py-6 rounded-3xl text-lg font-black bg-gradient-to-r from-whatsapp to-green-500 text-white shadow-[0_20px_40px_-10px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3 active:scale-95 transition-all"
                                >
                                    <Sparkles size={20} className="animate-pulse" />
                                    <span>Falar com Especialista</span>
                                </a>

                                <div className="flex justify-center gap-8 mt-4">
                                    <a href="tel:7133718478" className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1">
                                        <Phone size={24} />
                                        <span className="text-[10px] uppercase font-bold tracking-widest">Ligar</span>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1">
                                        <Instagram size={24} />
                                        <span className="text-[10px] uppercase font-bold tracking-widest">Instagram</span>
                                    </a>
                                    <a href="#footer" onClick={closeMenu} className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1">
                                        <MapPin size={24} />
                                        <span className="text-[10px] uppercase font-bold tracking-widest">Mapa</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Artistic Mark */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/5 font-black text-8xl pointer-events-none select-none italic whitespace-nowrap uppercase tracking-tighter">
                            Indústria de Óculos
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

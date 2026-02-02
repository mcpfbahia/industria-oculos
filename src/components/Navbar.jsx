import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowRight, Instagram, Phone, MapPin } from 'lucide-react';
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
        { name: 'Serviços', href: '#servicos' },
        { name: 'Depoimentos', href: '#depoimentos' },
    ];

    const drawerVariants = {
        hidden: { x: '100%', opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 200,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition: { ease: 'easeInOut', duration: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <a href="/" className="flex items-center">
                    <img
                        src="/logo-original.png"
                        alt="Logo"
                        className={`transition-all duration-500 ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'} w-auto object-contain brightness-110`}
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-secondary font-semibold text-sm uppercase tracking-widest hover:text-primary transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5571988186767"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white py-3 px-8 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-all shadow-md active:scale-95"
                    >
                        Falar com Especialista
                    </a>
                </div>

                {/* Mobile Toggle - Cleaner & Professional */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="p-2 text-secondary hover:text-primary transition-colors"
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </div>

            {/* Sleek Side Drawer Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-secondary/20 backdrop-blur-[2px] z-[110]"
                        />

                        {/* Drawer */}
                        <motion.div
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed top-0 right-0 w-[280px] h-screen bg-gradient-to-br from-white to-blue-50 z-[120] shadow-2xl flex flex-col"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-secondary/5">
                                <img src="/logo-original.png" alt="Logo" className="h-10 w-auto" />
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 text-secondary/40 hover:text-primary transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-8">
                                <div className="px-8 space-y-6">
                                    {navLinks.map((link) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            variants={itemVariants}
                                            className="block text-sm font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors border-b border-secondary/5 pb-4"
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="mt-12 px-8 space-y-8">
                                    <motion.div variants={itemVariants} className="space-y-4">
                                        <p className="text-[10px] uppercase tracking-widest font-black text-secondary/30">Nossos Contatos</p>
                                        <div className="space-y-3">
                                            <a href="tel:7133718478" className="flex items-center gap-3 text-secondary/70 hover:text-primary text-sm transition-colors">
                                                <Phone size={16} className="text-primary" />
                                                <span>71 3371-8478</span>
                                            </a>
                                            <a href="https://instagram.com" className="flex items-center gap-3 text-secondary/70 hover:text-primary text-sm transition-colors">
                                                <Instagram size={16} className="text-primary" />
                                                <span>@industriadeoculos</span>
                                            </a>
                                            <div className="flex items-start gap-3 text-secondary/70 text-sm">
                                                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                                                <span>Rua Hélio Machado, 47 A, Boca do Rio</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="p-8 bg-background border-t border-secondary/5">
                                <motion.a
                                    variants={itemVariants}
                                    href="https://wa.me/5571988186767"
                                    className="flex items-center justify-center gap-2 bg-whatsapp text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg hover:shadow-whatsapp/20 transition-all active:scale-95"
                                >
                                    <MessageCircle size={20} />
                                    WhatsApp
                                    <ArrowRight size={16} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

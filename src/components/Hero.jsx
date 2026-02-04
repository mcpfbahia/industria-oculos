import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-bg-light">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{ backgroundImage: 'url("/hero-bg.png")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-bg-light via-bg-light/80 to-transparent"></div>
            </div>

            <div className="section-padding relative z-10 w-full pt-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 tracking-wider uppercase">
                            Tecnologia em Lentes • Salvador
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-secondary">
                            Cuidado visual com <span className="text-primary italic">responsabilidade</span>, conforto e tecnologia
                        </h1>
                        <p className="text-lg md:text-2xl text-secondary/80 mb-10 max-w-xl leading-relaxed">
                            Ótica especializada em vendas de lentes para óculos monofocais e multifocais digitais. Atendimento humanizado para quem busca qualidade de vida.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <motion.a
                                href="https://wa.me/5571988186767"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-3 animate-pulse-soft text-lg py-4 px-8"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Agende seu horário com especialista
                                <ChevronRight size={24} />
                            </motion.a>

                            <div className="flex flex-col gap-1">
                                <div className="flex text-yellow-500 gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                </div>
                                <p className="text-secondary font-bold text-sm">+2.000 clientes satisfeitos em Salvador</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden md:block relative px-12"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
                            <img
                                src="/og-image.png"
                                alt="Tecnologia Lentes"
                                className="relative z-10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white transform rotate-3 hover:rotate-0 transition-all duration-700 ease-in-out"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-secondary/5 hidden lg:block">
                                <p className="text-primary font-black text-4xl leading-none">20+</p>
                                <p className="text-secondary/60 text-xs font-bold uppercase tracking-widest mt-2">Anos de Histórias</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

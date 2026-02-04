import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="bg-white overflow-hidden">
            <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <img
                        src="/about.png"
                        alt="Atendimento Humanizado"
                        className="rounded-3xl shadow-2xl relative z-10"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                        <p className="text-white font-bold text-4xl mb-1">20+</p>
                        <p className="text-white/80 text-sm">Anos de Experiência<br />no Mercado</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl mb-6">Tradição, Acolhimento e Tecnologia</h2>
                    <p className="text-lg text-secondary/80 mb-8 leading-relaxed">
                        A Indústria de Óculos é uma empresa que busca acolher todos os públicos, tendo como foco principal atendimento à família.
                        Trazendo tecnologia e modernidade em suas produções, traz o cuidado com o cliente como prioridade, tornando o pilar do nosso trabalho.
                        Abrangendo mais de vinte anos de experiência no mercado, buscamos sempre evoluir, oferecendo: Consultoria personalizada,
                        compromisso com a entrega, lentes de qualidade, preços acessíveis, atendimento humanizado, tecnologia moderna, garantia e assistência técnica inclusa no serviço.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Users size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Atendimento Humanizado</h4>
                                <p className="text-secondary/70">Focamos nas suas necessidades individuais, não apenas em vender óculos.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Garantia de Adaptação</h4>
                                <p className="text-secondary/70">Acompanhamos você até que sua visão esteja perfeita com o novo grau.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Tecnologia Digital</h4>
                                <p className="text-secondary/70">Lentes produzidas com precisão alemã e medição digital exclusiva.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

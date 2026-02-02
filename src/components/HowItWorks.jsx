import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ShoppingBag } from 'lucide-react';

const steps = [
    {
        title: "Consultoria",
        desc: "Avaliamos sua receita e entendemos sua necessidade técnica e estética para a escolha da armação e lente ideal.",
        icon: <ClipboardList size={32} />
    },
    {
        title: "Medição Digital",
        desc: "Utilizamos tecnologia de ponta para capturar as medidas exatas da sua face e pupila, garantindo precisão milimétrica.",
        icon: <span className="text-3xl font-bold">02</span>
    },
    {
        title: "Entrega Ágil",
        desc: "Com nosso laboratório otimizado, seus óculos ficam prontos rapidamente para que você não perca nenhum detalhe.",
        icon: <ShoppingBag size={32} />
    }
];

const HowItWorks = () => {
    return (
        <section className="bg-secondary text-white">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl text-white mb-4">Como funciona nosso atendimento</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Processo simplificado e tecnológico para garantir sua total satisfação e rapidez.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector line for desktop */}
                    <div className="hidden md:block absolute top-[40px] left-0 w-full h-0.5 bg-white/10 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10 text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-primary border-4 border-secondary text-white flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                {typeof step.icon === 'string' ? <span className="text-2xl font-bold">{step.icon}</span> : step.icon}
                            </div>
                            <h3 className="text-xl text-white mb-3">{step.title}</h3>
                            <p className="text-white/60">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

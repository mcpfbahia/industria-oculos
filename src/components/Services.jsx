import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Eye, Binary, Sun, Wrench } from 'lucide-react';

const services = [
    {
        title: "Lentes Digitais e Free Form",
        desc: "Precisão absoluta para multifocais e monofocais, garantindo um campo de visão mais amplo e nítido.",
        icon: <Layers size={32} />
    },
    {
        title: "Altas Dioptrias",
        desc: "Especialistas em lentes finas para altos graus de miopia, hipermetropia e astigmatismo. Leveza e estética.",
        icon: <Zap size={32} />
    },
    {
        title: "Baixa Visão e Prismas",
        desc: "Soluções específicas para necessidades complexas e auxílio visual avançado.",
        icon: <Eye size={32} />
    },
    {
        title: "Controle de Miopia",
        desc: "Tecnologia para retardar a progressão da miopia em crianças e adolescentes.",
        icon: <Binary size={32} />
    },
    {
        title: "Filtro Azul e Foto",
        desc: "Proteção contra telas digitais e lentes que escurecem no sol para máximo conforto.",
        icon: <Sun size={32} />
    },
    {
        title: "Manutenção e Ajustes",
        desc: "Cortesias e assistência técnica inclusa para garantir que seus óculos estejam sempre novos.",
        icon: <Wrench size={32} />
    }
];

const Services = () => {
    return (
        <section id="servicos" className="bg-white">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl mb-4">Especialidades que transformam sua visão</h2>
                    <p className="text-secondary/70 max-w-2xl mx-auto">
                        Utilizamos o que há de mais moderno na indústria óptica mundial para entregar
                        soluções personalizadas para cada perfil de cliente.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-bg-light border border-secondary/5 hover:border-primary/20 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl mb-3">{service.title}</h3>
                            <p className="text-secondary/70 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-secondary text-white overflow-hidden relative">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h3 className="text-2xl text-white mb-2">Não tem certeza de qual lente precisa?</h3>
                            <p className="text-white/70">Nossa consultoria técnica analisa sua receita e estilo de vida para indicar a melhor solução.</p>
                        </div>
                        <a
                            href="https://wa.me/5571988186767"
                            className="btn-primary bg-accent hover:bg-accent/90"
                        >
                            Falar com Técnico agora
                        </a>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>
            </div>
        </section>
    );
};

export default Services;

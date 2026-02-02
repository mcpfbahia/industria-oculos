import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const reviews = [
    {
        name: "Maria Oliveira",
        text: "Atendimento excepcional! As lentes multifocais ficaram perfeitas desde o primeiro dia. Recomendo muito pelo cuidado e atenção.",
        stars: 5,
        date: "Há 2 meses"
    },
    {
        name: "Antônio Santos",
        text: "Especialistas em altas dioptrias. Encontrei aqui a solução para o meu grau elevado com lentes super finas e leves.",
        stars: 5,
        date: "Há 1 mês"
    },
    {
        name: "Lúcia Ferreira",
        text: "Lugar de confiança. O atendimento humanizado faz toda a diferença para quem tem mais de 60 anos como eu.",
        stars: 5,
        date: "Há 3 semanas"
    }
];

const SocialProof = () => {
    return (
        <section id="depoimentos" className="bg-bg-light">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-6" />
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                        </div>
                        <span className="font-bold text-lg">5.0</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl mb-4">O que nossos clientes dizem</h2>
                    <p className="text-secondary/70 max-w-2xl mx-auto">
                        A satisfação de quem enxerga melhor é a nossa maior recompensa.
                        Confira as avaliações reais de quem já transformou sua visão conosco.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-secondary/5"
                        >
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-secondary mb-6 italic">"{review.text}"</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h4 className="font-bold text-secondary">{review.name}</h4>
                                    <p className="text-xs text-secondary/50">{review.date}</p>
                                </div>
                                <img src="/logo.png" alt="Logo" className="h-6 opacity-20" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.google.com/search?sca_esv=37b29cacd6547f1e&hl=pt-BR&gl=br&output=search&kgmid=/g/1tfctdxg&q=Ind%C3%BAstria+de+%C3%93culos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                        Ver todos os depoimentos no Google <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;

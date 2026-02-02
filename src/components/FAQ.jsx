import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Vocês indicam um profissional para eu realizar meu exame de vista?",
        answer: "Sim! Temos parcerias com os melhores oftalmologistas da região da Boca do Rio e adjacências. Podemos indicar o profissional ideal para sua necessidade específica."
    },
    {
        question: "Vocês vendem lentes de contato?",
        answer: "Sim, trabalhamos com as principais marcas de lentes de contato do mercado, tanto incolores quanto coloridas, com ou sem grau."
    },
    {
        question: "Vocês colocam grau em óculos de sol?",
        answer: "Com certeza! Somos especialistas em óculos de sol graduados, unindo proteção UV, estilo e a correção que você precisa."
    },
    {
        question: "Vocês fazem manutenção em óculos?",
        answer: "Sim, realizamos ajustes, trocas de plaquetas e manutenções preventivas. Para nossos clientes, a maioria desses serviços é cortesia."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-secondary/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
            >
                <span className="text-lg font-bold text-secondary">{question}</span>
                {isOpen ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-secondary/70 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="bg-white">
            <div className="section-padding">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl mb-4">Dúvidas Frequentes</h2>
                        <p className="text-secondary/70">
                            Separamos as perguntas mais comuns para ajudar você a decidir com segurança.
                        </p>
                    </div>
                    <div className="bg-bg-light rounded-3xl p-8 md:p-12 shadow-inner border border-secondary/5">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-primary/5 p-8 rounded-2xl border border-primary/10">
                        <p className="font-bold text-secondary mb-4">Ainda tem alguma dúvida?</p>
                        <a
                            href="https://wa.me/5571988186767"
                            className="text-primary font-bold hover:underline"
                        >
                            Envie sua pergunta no WhatsApp →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

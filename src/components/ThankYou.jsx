import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    useEffect(() => {
        // Tracking conversion could be placed here
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-bg-light flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center border border-secondary/5"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                    <CheckCircle size={48} />
                </motion.div>

                <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Mensagem Enviada!</h1>
                <p className="text-lg text-secondary/70 mb-12">
                    Agradecemos pelo seu contato. Nossa equipe técnica entrará em contato com você o mais breve possível para agendar sua consultoria.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 text-secondary font-bold hover:text-primary transition-colors py-3 px-6 rounded-xl border border-secondary/10"
                    >
                        <Home size={20} />
                        Voltar para o Início
                    </Link>
                    <a
                        href="https://wa.me/5571988186767"
                        className="btn-primary flex items-center justify-center gap-2"
                    >
                        Falar no WhatsApp Imediatamente
                        <ArrowRight size={20} />
                    </a>
                </div>

                <div className="mt-16 pt-8 border-t border-secondary/5">
                    <img src="/logo-transparente.png" alt="Indústria de Óculos" className="h-12 mx-auto grayscale opacity-50" />
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYou;

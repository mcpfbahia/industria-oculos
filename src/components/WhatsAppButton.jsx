import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/5571988186767"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[60] bg-whatsapp text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#20bd5a] transition-all"
        >
            <MessageCircle size={36} />

            {/* Desktop label */}
            <div className="absolute right-full mr-4 bg-white text-secondary px-6 py-3 rounded-2xl text-base font-black shadow-2xl whitespace-nowrap hidden lg:block border border-secondary/5">
                Como posso ajudar você?
            </div>

            {/* Notification dot to attract attention without being a full ping */}
            <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full border-4 border-white"></div>
        </motion.a>
    );
};

export default WhatsAppButton;

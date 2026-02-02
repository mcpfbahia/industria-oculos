import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-secondary/5 pt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12 mb-16">
                {/* Branding & Contact */}
                <div>
                    <img src="/logo.png" alt="Indústria de Óculos" className="h-24 mb-6" />
                    <p className="text-secondary/70 mb-8 leading-relaxed">
                        Especialistas em lentes de alta tecnologia e atendimento humanizado em Salvador.
                        Cuidando da sua visão com responsabilidade e precisão.
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4 text-secondary/70">
                            <MapPin className="text-primary shrink-0" />
                            <span>Rua Hélio Machado, 47 A, Boca do Rio, Salvador - BA</span>
                        </div>
                        <div className="flex gap-4 text-secondary/70">
                            <Phone className="text-primary shrink-0" />
                            <span>71 3371-8478</span>
                        </div>
                        <div className="flex gap-4 text-secondary/70">
                            <Clock className="text-primary shrink-0" />
                            <div>
                                <p>Seg a Sex: 08:30 às 17:30</p>
                                <p>Sáb: 08:30 às 13:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sitemap (Optional but good for SEO) */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-xl mb-4">Navegação</h4>
                    <a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a>
                    <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
                    <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
                    <a href="https://wa.me/5571988186767" className="hover:text-primary transition-colors">Agendar Consulta</a>
                </div>

                {/* Google Map */}
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg border border-secondary/5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.818815128766!2d-38.4190!3d-12.9840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzAyLjQiUyAzOMKwMjUnMDguNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização Indústria de Óculos"
                    ></iframe>
                </div>
            </div>

            <div className="bg-secondary py-8 text-center text-white/40 text-sm">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Indústria de Óculos. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

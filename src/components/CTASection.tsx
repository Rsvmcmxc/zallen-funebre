import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            Acolhimento, empatia e eficiência
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            em cada momento
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubra como nossa tecnologia pode transformar o atendimento da sua funerária, 
            oferecendo suporte humanizado 24 horas por dia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5544998002597?text=Olá! Gostaria de conversar com os consultores da Zallen sobre a automação de IA para funerárias."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              Converse com nossos consultores
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Consultoria gratuita • Sem compromisso • Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
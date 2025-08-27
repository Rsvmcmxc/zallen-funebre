import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Tecnologia que{' '}
            <span className="font-medium text-gray-800">acolhe</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
            IA que cuida de cada detalhe, 24 horas por dia.
          </p>

          {/* Subtitle */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Zallen une empatia e inovação para transformar o atendimento funerário.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5544998002597?text=Olá! Gostaria de saber mais sobre a consultoria gratuita da Zallen."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Consultoria Gratuita
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Subtle visual element */}
          <div className="mt-16 opacity-30">
            <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-transparent mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Heart, Clock, Shield, Sparkles } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Sempre ao seu lado',
      description: 'Atendimento humanizado e empático em todos os momentos.'
    },
    {
      icon: Clock,
      title: 'Disponível 24/7',
      description: 'Nunca deixa famílias sem resposta, a qualquer hora do dia.'
    },
    {
      icon: Shield,
      title: 'Tranquilidade garantida',
      description: 'Toda a burocracia resolvida sem esforço ou preocupação.'
    },
    {
      icon: Sparkles,
      title: 'Acolhimento tecnológico',
      description: 'Inovação a serviço do cuidado humano e da empatia.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Cuidado em cada detalhe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa tecnologia foi desenvolvida para oferecer suporte completo e humanizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                <benefit.icon size={28} className="text-gray-700" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
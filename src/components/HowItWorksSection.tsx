import React from 'react';
import { MessageCircle, Brain, Settings, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Família faz contato',
      description: 'O primeiro contato é feito de forma simples e acessível'
    },
    {
      icon: Brain,
      title: 'IA acolhe e orienta',
      description: 'Nossa IA compreende as necessidades com empatia e cuidado'
    },
    {
      icon: Settings,
      title: 'Processos automatizados',
      description: 'Toda burocracia é resolvida de forma automática e eficiente'
    },
    {
      icon: CheckCircle,
      title: 'Suporte completo',
      description: 'Família recebe apoio imediato e soluções personalizadas'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um processo simples e humanizado que cuida de tudo para você
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full mb-6">
                    <step.icon size={28} className="text-white" />
                  </div>
                  
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    Etapa {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
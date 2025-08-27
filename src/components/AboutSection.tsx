import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-8">
            Sobre a Zallen
          </h2>
          
          <div className="prose prose-lg prose-gray mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Na Zallen acreditamos que a tecnologia deve ser humana. Nossa IA foi criada 
              para estar presente nos momentos mais delicados, oferecendo apoio contínuo, 
              clareza e soluções completas, com respeito e acolhimento.
            </p>
            
            <p className="text-lg text-gray-500 leading-relaxed">
              Desenvolvemos uma solução que combina a eficiência da inteligência artificial 
              com a sensibilidade necessária para cuidar das famílias em seus momentos 
              mais difíceis, garantindo que nunca se sintam sozinhas.
            </p>
          </div>

          {/* Visual element */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
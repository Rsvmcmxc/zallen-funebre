import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "A Zallen nos deu a tranquilidade que precisávamos em um momento tão difícil. Tudo foi resolvido com cuidado e eficiência.",
      author: "Maria Silva",
      role: "Cliente"
    },
    {
      text: "Impressionante como a tecnologia pode ser tão humana. O atendimento foi empático e todas as burocracias foram resolvidas sem complicações.",
      author: "João Santos",
      role: "Cliente"
    },
    {
      text: "Disponível 24 horas, sempre com respostas claras e apoio constante. Recomendo para todas as funerárias.",
      author: "Ana Costa",
      role: "Diretora Funerária"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Confiança em cada palavra
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O que nossos clientes dizem sobre nossa tecnologia humanizada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-6">
                <Quote size={20} className="text-gray-600" />
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
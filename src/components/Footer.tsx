import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/IMG_20250825_233532.png" 
              alt="Zallen" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-600 leading-relaxed mb-6">
              Tecnologia humanizada para o setor funerário. 
              Acolhimento e eficiência em cada atendimento.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-gray-900 font-medium">Roberto Vieira</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-500" />
                <span className="text-gray-600">(44) 99800-2597</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-500" />
                <span className="text-gray-600">contato@zallen.com.br</span>
              </div>
            </div>
          </div>

          {/* Empty column for spacing */}
          <div className="col-span-1 md:col-span-1"></div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Zallen. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
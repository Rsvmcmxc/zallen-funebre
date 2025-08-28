import React from "react";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Zallen</div>

        {/* Links desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-600">Início</a>
          <a href="#sobre" className="hover:text-gray-600">Sobre</a>
          <a href="#servicos" className="hover:text-gray-600">Serviços</a>
          <a href="#contato" className="hover:text-gray-600">Contato</a>
        </nav>

        {/* Menu hambúrguer mobile */}
        <button className="md:hidden text-2xl ml-auto">
          ☰
        </button>
      </div>
    </header>
  );
}

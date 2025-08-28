import React from "react";

export default function HeroSection() {
  return (
    <section className="relative py-12 md:py-16 bg-gray-100 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bem-vindo à Zallen Fúnebre
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Cuidando com respeito e dignidade nos momentos mais delicados.
        </p>
        <a
          href="#contato"
          className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
}

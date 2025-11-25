import React from "react";
import { MessageCircle, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle size={24} />,
    title: "1. Contato Inicial",
    desc: "Clique no botão abaixo e chame nossa equipe no WhatsApp."
  },
  {
    icon: <FileText size={24} />,
    title: "2. Detalhes do Evento",
    desc: "Envie as informações: data, local, atrações e valores."
  },
  {
    icon: <Rocket size={24} />,
    title: "3. Vendas no Ar",
    desc: "Configuramos sua página e iniciamos as vendas em até 24h."
  }
];

const StartPromotion = () => {
  const whatsappNumber = "5511999999999"; 
  const message = encodeURIComponent("Olá! Quero divulgar meu evento na HypeON.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="w-full bg-neutral-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl font-bold mb-12">
          Como funciona?
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10">
              <div className="w-16 h-16 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center text-indigo-500 mb-4 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-neutral-400 text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
          
          {/* Linha conectora (apenas desktop) */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-neutral-800 -z-0"></div>
        </div>

        {/* CTA Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 shadow-xl shadow-green-900/20"
        >
          <MessageCircle size={24} fill="black" className="text-black" />
          Quero Divulgar Agora
        </a>
        
        <p className="mt-4 text-neutral-500 text-sm">
          Atendimento de Seg. a Sex. das 09h às 18h
        </p>
      </div>
    </section>
  );
};

export default StartPromotion;
import React from "react";
import { Megaphone, TrendingUp, Users, ShieldCheck, ArrowLeft } from "lucide-react";

const benefits = [
  {
    icon: <Users size={32} />,
    title: "Alcance Massivo",
    description: "Conecte-se com milhares de apaixonados por música e entretenimento em nossa base ativa."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Analytics em Tempo Real",
    description: "Acompanhe vendas, acessos e conversão através de nosso dashboard exclusivo para parceiros."
  },
  {
    icon: <Megaphone size={32} />,
    title: "Marketing Especializado",
    description: "Nossa equipe cria campanhas direcionadas para garantir que seu evento seja o assunto do momento."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Segurança Total",
    description: "Sistema antifraude de ponta e processamento de pagamentos seguro para você e seu público."
  }
];

const PromoteBenefits = () => {
  return (
    <section className="w-full bg-neutral-950 py-20 px-6 border-b border-neutral-900">

        {/* Botão de Voltar */}
      <a 
        href="/"
        className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Voltar para Home</span>
      </a>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-semibold tracking-wide uppercase text-sm mb-2">
            Por que a HypeON?
          </h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold">
            Potencialize seu evento ao máximo
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl hover:bg-neutral-800 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h4 className="text-white text-xl font-bold mb-3">
                {benefit.title}
              </h4>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoteBenefits;
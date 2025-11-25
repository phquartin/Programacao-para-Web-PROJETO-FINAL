import React from "react";

const PromoteEvent = () => {
  return (
    <section className="w-full bg-neutral-950 pb-20 px-6">
      <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-12 text-center shadow-lg">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Quer divulgar seu evento conosco?
        </h2>
        <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
          Oferecemos a melhor infraestrutura e alcance para garantir que seu show seja um sucesso absoluto.
        </p>
        
        <a 
          href="/divulgar" 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          Saiba mais
        </a>
      </div>
    </section>
  );
};

export default PromoteEvent;
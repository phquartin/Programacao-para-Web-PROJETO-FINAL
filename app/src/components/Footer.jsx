import React from "react";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react"; // Usando Facebook como placeholder para TikTok se necessário, ou importar ícone customizado

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Logo e Links */}
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">
          
          {/* Logo (Simulado com CSS) */}
          <div className="flex items-center gap-2 mb-8 md:mb-0">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">HypeON</span>
            </div>
            <span className="font-bold text-xl">com.vc</span>
          </div>

          {/* Colunas de Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full md:w-auto">
            
            {/* Coluna 1 */}
            <div className="flex flex-col gap-3">
              <h4 className="font-bold uppercase mb-2 text-sm tracking-wider">O que tá tendo na HypeON?</h4>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition">Verão HypeON</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition">Eventos HypeON</a>
            </div>

            {/* Coluna 2 */}
            <div className="flex flex-col gap-3">
              <h4 className="font-bold uppercase mb-2 text-sm tracking-wider">Nossas Operações</h4>
              <a href="/divulgar" className="text-neutral-400 hover:text-white text-sm transition">Faça seu Evento hypar</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition">Mané Mercado</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition">HYPE Festival</a>
            </div>

            {/* Coluna 3 */}
            <div className="flex flex-col gap-3">
              <h4 className="font-bold uppercase mb-2 text-sm tracking-wider">Sobre</h4>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition">Trabalhe Conosco</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition">Melhores para o Mundo</a>
            </div>

            {/* Coluna 4 */}
            <div className="flex flex-col gap-3">
              <h4 className="font-bold uppercase mb-2 text-sm tracking-wider">Suporte</h4>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition">Entrar em Contato</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition">FAQ</a>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Apps e Redes */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
          
          {/* Apps Buttons */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-wider">Baixe nosso App</h4>
            <div className="flex gap-4">
              {/* Botão Apple Simulado */}
              <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-neutral-200 transition">
                <span className="text-2xl"></span>
                <div className="text-left leading-none">
                  <span className="block text-[10px]">Download on the</span>
                  <span className="font-bold text-sm">App Store</span>
                </div>
              </button>
              
              {/* Botão Google Simulado */}
              <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-neutral-200 transition">
                <span className="text-lg">▶</span>
                <div className="text-left leading-none">
                  <span className="block text-[10px]">GET IT ON</span>
                  <span className="font-bold text-sm">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="md:text-right">
            <h4 className="font-bold uppercase mb-4 text-sm tracking-wider md:text-right">Nossas Redes</h4>
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="hover:text-neutral-400 transition"><Instagram size={20} /></a>
              {/* Nota: Ícone TikTok requer importação específica ou SVG custom, usando placeholder se necessário */}
              <span className="hover:text-neutral-400 transition cursor-pointer font-bold text-lg">Tk</span> 
              <a href="#" className="hover:text-neutral-400 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-neutral-400 transition"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-neutral-800 my-8" />

        {/* BOTTOM SECTION: Links Legais e Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-neutral-400 mb-8">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition">Preciso de Ajuda</a>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-1">
            <span>Feito com</span>
            <span className="text-red-600">❤</span>
            <span className="text-white font-bold">HypeON.com.vc</span>
          </div>
        </div>

        {/* FINAL INFO */}
        <div className="flex flex-col md:flex-row justify-between text-xs text-neutral-500 mt-12">
          <p>2005 - 2025 HypeON.com.vc</p>
          <div className="mt-4 md:mt-0 md:text-right">
            <p>HypeON PRODUÇÕES E EVENTOS LTDA, CNPJ 00.000.000/0001-00</p>
            <p>SIG Q0, bloco c, lote 00, lj. 00, p. C56, Brasília/DF, CEP 00.000-000</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
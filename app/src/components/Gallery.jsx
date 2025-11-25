import React, { useRef } from "react";

// Dados de exemplo (substitua pelas suas fotos reais)
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", alt: "Evento Foto 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80", alt: "Evento Foto 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80", alt: "Evento Foto 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80", alt: "Evento Foto 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", alt: "Evento Foto 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80", alt: "Evento Foto 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80", alt: "Evento Foto 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80", alt: "Evento Foto 8" },
];

const Gallery = () => {
  // Referência para o contêiner que rola
  const scrollRef = useRef(null);

  // Função para rolar para esquerda ou direita
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Define quanto rolar. Usamos 80% da largura da tela visível para um efeito suave.
      const scrollAmount = current.clientWidth * 0.8;
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth' // Faz o movimento ser suave
      });
    }
  };

  return (
    <section className="w-full bg-neutral-950 py-16 pl-6 relative group">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 flex justify-center">
        Galeria de Fotos
      </h2>

      {/* Container Relativo para posicionar as setas */}
      <div className="relative">
        
        {/* Botão Esquerda (Anterior) */}
        {/* 'group-hover:opacity-100 opacity-0' faz ele aparecer só quando passa o mouse na seção */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/50 text-white p-2 
                     hover:bg-black/70 transition-all duration-300
                     group-hover:opacity-100 opacity-0 hidden md:flex items-center justify-center h-full w-12 rounded-r-lg"
        >
          {/* Ícone de Seta Esquerda (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Container de Rolagem Horizontal */}
        {/* scrollbar-hide: classe customizada do Passo 1 */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide gap-4 py-4 pr-6"
        >
          {galleryImages.map((image) => (
        <div
          key={image.id}
          className="flex-none relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] 
                    rounded-xl overflow-hidden cursor-pointer 
                    hover:scale-105 hover:z-10 transition-all duration-300 ease-in-out"
        >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy" // Boa prática para performance
              />
              {/* Overlay opcional no hover */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Botão Direita (Próximo) */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/50 text-white p-2 
                     hover:bg-black/70 transition-all duration-300
                     group-hover:opacity-100 opacity-0 hidden md:flex items-center justify-center h-full w-12 rounded-l-lg"
        >
          {/* Ícone de Seta Direita (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Gallery;
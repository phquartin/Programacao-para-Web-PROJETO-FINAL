import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="../public/assets/background.mp4" 
        autoPlay
        loop
        muted
        playsInline // Essencial para autoplay em mobile
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Maior festival de música do Brasil
        </h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Junte-se a nós para uma experiência inesquecível com artistas
            Dia 19 a 21 de Julho de 2024
        </p>
      </div>

      {/* Gradiente de transição para o NextShows (neutral-950) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-950 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default Banner;
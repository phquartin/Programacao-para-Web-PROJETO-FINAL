import React from "react";
import { useCart } from "../contexts/CartContext";

const shows = [
  { id: 1, date: "12 Dez 2025", city: "São Paulo, SP", venue: "Audio Club", price: 150.00 },
  { id: 2, date: "19 Dez 2025", city: "Rio de Janeiro, RJ", venue: "Vivo Rio", price: 130.00 },
  { id: 3, date: "08 Jan 2026", city: "Curitiba, PR", venue: "Ópera de Arame", price: 120.00 },
];

const NextShows = () => {
  const { addToCart } = useCart(); // Usar hook

  return (
    <section className="w-full bg-neutral-950 py-16 px-6">
      <h2 className="text-center text-white text-3xl md:text-4xl font-semibold mb-12">
        Próximos Shows
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {shows.map((show, index) => (
          <div key={index} className="border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm p-8 rounded-xl flex flex-col items-start hover:bg-neutral-800/60 transition-all duration-300">
            <span className="text-indigo-400 text-sm font-medium mb-2 tracking-wide">{show.date}</span>
            <h3 className="text-white text-xl font-semibold mb-1">{show.city}</h3>
            <p className="text-neutral-400">{show.venue}</p>
            <span className="text-green-400 text-sm font-medium mb-2 tracking-wide">R$ {show.price}</span>
            
            <button 
              onClick={() => addToCart(show)}
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Comprar Ingresso
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextShows;
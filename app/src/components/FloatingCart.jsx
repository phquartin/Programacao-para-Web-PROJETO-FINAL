import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const FloatingCart = () => {
  const { cartItems, updateQuantity, totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (totalItems === 0 && !isOpen) return null;

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        >
          <span className="text-2xl">🛒</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-neutral-950">
            {totalItems}
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-neutral-900 border border-neutral-800 w-full max-w-md rounded-xl shadow-2xl p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-white mb-6">Carrinho ({totalItems})</h2>

            <ul className="max-h-60 overflow-y-auto space-y-4 mb-6 pr-2">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center bg-neutral-800/50 p-3 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{item.city}</p>
                    <p className="text-xs text-neutral-400">{item.venue}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-neutral-900 rounded-lg px-2 py-1 border border-neutral-700">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-neutral-400 hover:text-white w-6 h-6 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-white font-mono text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-neutral-400 hover:text-white w-6 h-6 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingCart;
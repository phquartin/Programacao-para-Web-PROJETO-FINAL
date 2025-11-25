import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const FloatingCart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalItems, cartTotal } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const formatCurrency = (value) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

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

            <h2 className="text-xl font-bold text-white mb-6">Carrinho</h2>

            <ul className="max-h-[60vh] overflow-y-auto space-y-4 mb-6 pr-2">
              {cartItems.map((item) => (
                <li key={item.id} className="bg-neutral-800/50 p-3 rounded-lg relative group">
                  
                  {/* Botão de Excluir (Lixeira) */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-3 right-3 text-neutral-500 hover:text-red-500 transition-colors"
                    title="Remover item"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>

                  <div className="pr-8"> {/* Padding right para não sobrepor o botão de excluir */}
                    <h3 className="text-white font-bold text-sm">{item.city}</h3>
                    {/* NOVO: Exibindo Venue */}
                    <p className="text-neutral-300 text-xs mb-1">{item.venue}</p>
                    <p className="text-xs text-indigo-400 font-mono">
                      {formatCurrency(item.price)} un.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-end mt-3">
                    <div className="flex items-center gap-3 bg-neutral-900 rounded-lg px-2 py-1 border border-neutral-700">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-neutral-400 hover:text-white w-6 h-6 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-white font-mono text-sm w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-neutral-400 hover:text-white w-6 h-6 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-white font-bold">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-neutral-700 pt-4 mb-4 flex justify-between items-center">
              <span className="text-neutral-300">Total</span>
              <span className="text-2xl font-bold text-white">{formatCurrency(cartTotal)}</span>
            </div>

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
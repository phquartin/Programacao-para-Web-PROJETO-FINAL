import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router";
import { CreditCard, Lock, CheckCircle } from "lucide-react";

const Checkout = () => {
  const { cartItems, cartTotal, setCartItems } = useCart(); // Precisamos expor setCartItems no Context (ver passo 4)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Redireciona se tentar acessar checkout com carrinho vazio
  useEffect(() => {
    if (cartItems.length === 0 && !success) {
      navigate("/");
    }
  }, [cartItems, navigate, success]);

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simula delay de processamento
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Limpa o carrinho após 2 segundos e redireciona
      setTimeout(() => {
        setCartItems([]); // Requer atualização no Context
        navigate("/");
      }, 3000);
    }, 2000);
  };

  const formatCurrency = (value) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  if (success) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
        <div className="text-center">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">Pagamento Aprovado!</h2>
          <p className="text-neutral-400">Seus ingressos foram enviados para o seu e-mail.</p>
          <p className="text-sm text-neutral-600 mt-4">Redirecionando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Coluna 1: Resumo do Pedido */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <ul className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b border-neutral-800 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold">{item.city}</p>
                    <p className="text-sm text-neutral-400">{item.venue}</p>
                    <p className="text-xs text-neutral-500">Qtd: {item.quantity}</p>
                  </div>
                  <span className="font-mono">{formatCurrency(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center pt-4 border-t border-neutral-700">
              <span className="text-xl">Total</span>
              <span className="text-2xl font-bold text-indigo-400">{formatCurrency(cartTotal)}</span>
            </div>
          </div>
        </div>

        {/* Coluna 2: Pagamento */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lock size={24} className="text-indigo-500" />
            Dados de Pagamento
          </h2>
          
          <form onSubmit={handlePayment} className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 space-y-6">
            <div>
              <label className="block text-sm text-neutral-400 mb-2">Nome no Cartão</label>
              <input type="text" required className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition" placeholder="NOME COMO NO CARTAO" />
            </div>

            <div>
              <label className="block text-sm text-neutral-400 mb-2">Número do Cartão</label>
              <div className="relative">
                <input type="text" required maxLength="19" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-indigo-500 transition" placeholder="0000 0000 0000 0000" />
                <CreditCard className="absolute left-3 top-3.5 text-neutral-500" size={18} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Validade</label>
                <input type="text" required maxLength="5" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition" placeholder="MM/AA" />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">CVV</label>
                <input type="text" required maxLength="3" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition" placeholder="123" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-neutral-700 text-white font-bold py-4 rounded-lg transition-all mt-4 flex justify-center items-center"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                `Pagar ${formatCurrency(cartTotal)}`
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
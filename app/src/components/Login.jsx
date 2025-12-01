import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Lock, Mail } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redireciona para onde o usuário queria ir, ou para o carrinho
  const from = location.state?.from?.pathname || "/carrinho";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-neutral-400 mb-2 text-sm">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-neutral-500" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-neutral-400 mb-2 text-sm">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-neutral-500" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="******"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-all"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
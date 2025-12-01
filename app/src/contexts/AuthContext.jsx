import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se já existe login salvo ao carregar
    const storedUser = localStorage.getItem("hypeon_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulação: Aceita qualquer email/senha não vazios
    // Em produção, aqui entraria a chamada à API/Firebase
    const mockUser = { email, name: email.split("@")[0], token: "mock-jwt-token" };
    
    setUser(mockUser);
    localStorage.setItem("hypeon_user", JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hypeon_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
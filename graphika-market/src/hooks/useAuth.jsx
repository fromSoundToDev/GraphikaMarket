import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        const userData = await api.auth.me();
        setUser(userData);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("authToken");
    } finally {
      setIsLoading(false);
    }
  }

  async function login(email, password) {
    try {
      const response = await api.auth.login(email, password);
      localStorage.setItem("authToken", response.token);
      setUser(response.user);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async function register(userData) {
    try {
      const response = await api.auth.register(userData);
      localStorage.setItem("authToken", response.token);
      setUser(response.user);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }

  function logout() {
    localStorage.removeItem("authToken");
    setUser(null);
    api.auth.logout().catch(console.error);
  }

  return (
    <AuthContext.Provider value={{user,login,register,logout,isLoading,isAuthenticated: !!user,}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

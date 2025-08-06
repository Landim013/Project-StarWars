import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.find((u) => u.authenticated) || null;
  });

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) => {
      if (u.email === email && u.password === password) {
        setUser({ email });
        return { ...u, authenticated: true };
      }
      return { ...u, authenticated: false };
    });

    const isValid = updatedUsers.some((u) => u.authenticated);

    if (isValid) {
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      navigate("/home");
      return true;
    }

    return false;
  };

  const logout = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) => ({ ...u, authenticated: false }));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(null);
    navigate("/login");
  };

  const deleteAccount = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const filtered = users.filter((u) => u.email !== user?.email);
    localStorage.setItem("users", JSON.stringify(filtered));
    setUser(null);
    navigate("/register");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

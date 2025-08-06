import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("userRegister"));

    const isValid =
      userStorage &&
      email === userStorage.email &&
      password === userStorage.password;

    if (isValid) {
      const userData = { email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/home");
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

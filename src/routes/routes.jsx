import { Route, Routes } from "react-router-dom";
// import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/dashBoard";
import Login from "../pages/login";
import Register from "../pages/register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

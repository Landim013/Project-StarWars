import { Route, Routes } from "react-router-dom";

import DefaultLayout from "../layouts";
import Home from "../pages/dashBoard";
import Login from "../pages/login";
import Register from "../pages/register";
import ProtectedRoute from "../utils/protectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

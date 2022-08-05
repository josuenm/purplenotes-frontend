import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/Header";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserEdit } from "./pages/UserEdit";
import { HeaderLogged } from "./components/HeaderLogged";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/userContext";

export default function RouteController() {
  const pathname = useLocation();
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  return (
    <>
      {!!user ? <HeaderLogged /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/edit" element={<UserEdit />} />
      </Routes>
    </>
  );
}

import { useNavigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { HeaderLogged } from "./components/HeaderLogged";
import { useEffect } from "react";

export default function RouteController() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/users/edit")
      localStorage.getItem("user") && navigate("/notes", { replace: true });
  }, [navigate, pathname]);

  return (
    <>
      {localStorage.getItem("user") ? <HeaderLogged /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

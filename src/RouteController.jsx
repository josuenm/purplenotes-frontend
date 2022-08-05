import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { EditNote } from "./pages/EditNote";
import { Header } from "./components/Header";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserEdit } from "./pages/UserEdit";
import { NoteList } from "./pages/NoteList";
import { HeaderLogged } from "./components/HeaderLogged";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/userContext";

export default function RouteController() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const redirectionRoutesForUsers = ["/", "/register", "/login"];

  useEffect(() => {
    const isRedirect = redirectionRoutesForUsers.some(
      (route) => pathname === route
    );

    if (user) {
      if (isRedirect) {
        navigate("/dashboard");
        return;
      }
    } else if (!isRedirect) {
      navigate("/");
    }
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<NoteList />} />
      <Route path="/dashboard/:id/edit" element={<EditNote />} />
      <Route path="/dashboard/user/edit" element={<UserEdit />} />
    </Routes>
  );
}

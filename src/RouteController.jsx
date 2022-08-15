import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { EditNote } from "./pages/EditNote";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserEdit } from "./pages/UserEdit";
import { NoteList } from "./pages/NoteList";
import { useEffect } from "react";
import NotFound from "./pages/404";

export default function RouteController() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const redirectionRoutesForUsers = ["/", "/register", "/login"];

  const isRedirect = redirectionRoutesForUsers.some(
    (route) => pathname === route
  );

  useEffect(() => {
    if (!localStorage.getItem("purplenotes.user") && !isRedirect) {
      navigate("/");
      return;
    }

    if (isRedirect) {
      navigate("/dashboard");
      return;
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<NoteList />} />
      <Route path="/dashboard/:id/edit" element={<EditNote />} />
      <Route path="/dashboard/user/edit" element={<UserEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

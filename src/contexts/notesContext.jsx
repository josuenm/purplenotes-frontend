import { createContext, useContext, useEffect, useState } from "react";
import { GlobalToolsContext } from "./globalToolsContext";
import { NotesServices } from "../services/axios/notes";
import { useNavigate } from "react-router-dom";
import nookies from "nookies";

export const NotesContext = createContext(null);

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // const firstData = {
  //   title: response.data[0].title,
  //   body: response.data[0].body,
  //   id: response.data[0]._id,
  // };

  const { handleLoading } = useContext(GlobalToolsContext);

  const navigation = useNavigate();

  async function list(data) {
    handleLoading(true);
    const response = await NotesServices.allNotes();

    switch (response.status) {
      case 200:
        setNotes(response.data);
        break;
    }

    handleLoading(false);
  }

  return (
    <NotesContext.Provider value={{ notes }}>{children}</NotesContext.Provider>
  );
};

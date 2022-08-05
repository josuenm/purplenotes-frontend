import { createContext, useContext, useEffect, useState } from "react";
import { GlobalToolsContext } from "./globalToolsContext";
import { NotesServices } from "../services/axios/notes";
import { useNavigate } from "react-router-dom";
import nookies from "nookies";

export const NotesContext = createContext(null);

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  const { handleLoading } = useContext(GlobalToolsContext);

  const navigation = useNavigate();

  function handleCurrentNote(data) {
    setCurrentNote({
      body: data.body,
      title: data.title,
      id: data._id,
    });
  }

  async function list() {
    handleLoading(true);
    const response = await NotesServices.allNotes();

    switch (response.status) {
      case 200:
        setNotes(response.data);
        handleCurrentNote(response.data[0]);
        break;

      default:
        break;
    }

    handleLoading(false);
  }

  async function create() {
    handleLoading(true);

    const response = await NotesServices.create();

    switch (response.status) {
      case 201:
        list();
        handleCurrentNote(response.data);
        break;

      default:
        break;
    }
    handleLoading(false);
  }

  async function update(id, params) {
    handleLoading(true);

    const response = await NotesServices.update(id, params);

    switch (response.status) {
      case 200:
        list();
        handleCurrentNote(response.data);
        break;

      default:
        break;
    }

    handleLoading(false);
  }

  async function search(query) {
    if (query.length === 0) {
      list();
      return;
    }
    const response = await NotesServices.search(query);

    switch (response.status) {
      case 200:
        setNotes(response.data);
        break;

      default:
        break;
    }
  }


  async function delete(id) {
    handleLoading(true);

    const response = await NotesServices.delete(id);

    switch (response.status) {
      case 204:
        list();
        break;

      default:
        break;
    }

    handleLoading(false);
  }

  useEffect(() => {
    list();
  }, []);

  return (
    <NotesContext.Provider
      value={{ 
        notes, 
        currentNote, 
        handleCurrentNote, 
        create, 
        update, 
        search, 
        delete 
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

import { createContext, useContext, useState } from "react";
import { GlobalToolsContext } from "./globalToolsContext";
import { UserContext } from "./userContext";
import { NotesServices } from "../services/axios/notes";
import { useNavigate } from "react-router-dom";
import { parseCookies } from "nookies";

export const NotesContext = createContext(null);

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  const { handleLoading, handleError } = useContext(GlobalToolsContext);
  const { Exit } = useContext(UserContext);

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

    if (!parseCookies()["purplenotes.token"]) {
      handleLoading(false);
      return;
    }
    console.log(parseCookies()["purplenotes.token"]);
    const response = await NotesServices.allNotes();
    switch (response.status) {
      case 200:
        if (response.data.length > 0) {
          setNotes(response.data);
          handleCurrentNote(response.data[0]);
        } else {
          setNotes([]);
        }
        break;

      case 401:
        Exit();
        break;

      default:
        handleError("Something wrong, try again");
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

      case 401:
        Exit();
        break;

      default:
        handleError("Something wrong, try again");
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

      case 401:
        Exit();
        break;

      default:
        handleError("Something wrong, try again");
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

      case 401:
        Exit();
        break;

      default:
        handleError("Something wrong, try again");
        break;
    }
  }

  async function deleteNote(id) {
    handleLoading(true);

    const response = await NotesServices.delete(id);
    switch (response.status) {
      case 204:
        list();
        break;

      case 401:
        Exit();
        break;

      default:
        handleError("Something wrong, try again");
        break;
    }

    handleLoading(false);
  }

  function findById(id) {
    const note = notes.find((n) => n._id === id);
    if (note) {
      handleCurrentNote(note);
    }
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        currentNote,
        handleCurrentNote,
        create,
        update,
        search,
        deleteNote,
        findById,
        list,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

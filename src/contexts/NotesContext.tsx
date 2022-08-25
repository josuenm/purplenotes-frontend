import notesApi from "@services/notesApi";
import { createContext, useContext, useState } from "react";
import { NoteProps } from "../types/NoteProps";
import { GlobalToolsContext } from "./GlobalToolsContext";
import { UserContext } from "./UserContext";

interface ProviderProps {
  children: React.ReactNode;
}

interface NotesContextProps {
  List: () => Promise<void>;
  Create: () => Promise<void>;
  DeleteNote: (id: string) => Promise<void>;
  UpdateNote: (
    id: string,
    data: { title: string; body: string }
  ) => Promise<void>;
  notes: NoteProps[] | never[];
}

export const NotesContext = createContext({} as NotesContextProps);

export const NotesContextProvider = ({ children }: ProviderProps) => {
  const { handleLoading, handleAlert } = useContext(GlobalToolsContext);
  const { Exit } = useContext(UserContext);
  const [notes, setNotes] = useState<NoteProps[] | never[]>([]);

  async function List() {
    const response = await notesApi.list();

    switch (response.status) {
      case 200:
        setNotes(response.data);
        break;

      case 401:
        Exit();
        handleAlert("error", "Unauthorized");
        break;

      default:
        handleAlert("error", "Something wrong, try again");
        break;
    }
  }

  async function Create() {
    handleLoading(true);

    const response = await notesApi.create();

    switch (response.status) {
      case 201:
        setNotes((prev) => [...prev, response.data]);
        handleAlert("success", "Note has been created");
        break;

      case 401:
        Exit();
        handleAlert("error", "Unauthorized");
        break;

      default:
        handleAlert("error", "Something wrong, try again");
        break;
    }

    handleLoading(false);
  }

  async function UpdateNote(id: string, data: { title: string; body: string }) {
    const response = await notesApi.updateNote(id, data);

    switch (response.status) {
      case 200:
        break;

      case 401:
        Exit();
        handleAlert("error", "Unauthorized");
        break;

      default:
        handleAlert("error", "Something wrong, try again");
        break;
    }
  }

  async function DeleteNote(id: string) {
    handleLoading(true);

    const response = await notesApi.deleteNote(id);

    switch (response.status) {
      case 204:
        setNotes((prev) => prev.filter((item) => item._id !== id));
        handleAlert("success", "Note deleted successfully");
        break;

      case 401:
        Exit();
        handleAlert("error", "Unauthorized");
        break;

      case 404:
        handleAlert("error", "Note not found");
        break;

      default:
        handleAlert("error", "Something wrong, try again");
        break;
    }

    handleLoading(false);
  }

  return (
    <NotesContext.Provider
      value={{ List, Create, DeleteNote, UpdateNote, notes }}
    >
      {children}
    </NotesContext.Provider>
  );
};

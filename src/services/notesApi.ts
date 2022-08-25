import axios from "axios";
import { parseCookies } from "nookies";

const api = axios.create({
  baseURL: "http://localhost:8080/notes",
});

const notesApi = {
  list: async () => {
    return await api
      .get("/", {
        headers: {
          "purplenotes.token": parseCookies()["purplenotes.token"],
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
  },

  create: async () => {
    return await api
      .post(
        "/",
        {
          title: "New note",
          body: "<p>New note</p>",
        },
        {
          headers: {
            "purplenotes.token": parseCookies()["purplenotes.token"],
          },
        }
      )
      .then((res) => res)
      .catch((err) => err.response);
  },

  deleteNote: async (id: string) => {
    return await api
      .delete("/" + id, {
        headers: {
          "purplenotes.token": parseCookies()["purplenotes.token"],
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
  },
};

export default notesApi;

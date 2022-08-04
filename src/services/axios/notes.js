import axios from "axios";
import nookies from "nookies";

const api = axios.create({
  baseURL: "http://localhost:8080/notes",
});

export const NotesServices = {
  allNotes: async () => {
    api
      .get("/", {
        headers: {
          "jsnotes.token": nookies.get()["jsnotes.token"],
        },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },

  create: async () => {
    await api
      .post(
        "/",
        { title: "New note", body: "<p>New note</p>" },
        {
          headers: {
            "jsnotes.token": nookies.get()["jsnotes.token"],
          },
        }
      )
      .then((data) => data)
      .catch((error) => error.response);
  },

  deleteNote: async (id) => {
    await api
      .delete(`/${id}`, {
        headers: {
          "jsnotes.token": nookies.get()["jsnotes.token"],
        },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },

  update: async (id, params) => {
    return await api
      .put(`/${id}`, params, {
        headers: {
          "jsnotes.token": nookies.get()["jsnotes.token"],
        },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },

  search: async (query) => {
    return await api
      .get(`/search?query=${query}`, {
        headers: {
          "jsnotes.token": nookies.get()["jsnotes.token"],
        },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },
};
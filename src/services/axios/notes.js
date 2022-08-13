import axios from "axios";
import nookies from "nookies";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${API_URL}/notes`,
});

export const NotesServices = {
  allNotes: async () => {
    return await api
      .get("/", {
        headers: {
          "purplenotes.token": nookies.get()["purplenotes.token"],
        },
      })
      .then((data) => data)
      .catch((error) => error.response);
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
            "purplenotes.token": nookies.get()["purplenotes.token"],
          },
        }
      )
      .then((data) => data)
      .catch((error) => error.response);
  },

  delete: async (id) => {
    return await api
      .delete(`/${id}`, {
        headers: {
          "purplenotes.token": nookies.get()["purplenotes.token"],
        },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },

  update: async (id, params) => {
    return await api
      .put(`/${id}`, params, {
        headers: {
          "purplenotes.token": nookies.get()["purplenotes.token"],
        },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },

  search: async (query) => {
    return await api
      .get(`/search?query=${query}`, {
        headers: {
          "purplenotes.token": nookies.get()["purplenotes.token"],
        },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },
};

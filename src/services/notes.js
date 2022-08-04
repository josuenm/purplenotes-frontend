import { Api } from "./api";

export const NotesServices = {
  allNotes: async () =>
    Api.get("/notes", {
      headers: {
        "access-token": localStorage.getItem("token"),
      },
    }),

  create: async () =>
    Api.post(
      "/notes",
      { title: "New note", body: "<p>New note</p>" },
      {
        headers: {
          "access-token": localStorage.getItem("token"),
        },
      }
    ),

  deleteNote: async (id) =>
    Api.delete(`/notes/${id}`, {
      headers: {
        "access-token": localStorage.getItem("token"),
      },
    }),

  update: async (id, params) => {
    return await Api.put(`/notes/${id}`, params, {
      headers: {
        "access-token": localStorage.getItem("token"),
      },
    });
  },

  search: async (query) => {
    return await Api.get(`/notes/search?query=${query}`, {
      headers: {
        "access-token": localStorage.getItem("token"),
      },
    });
  },
};

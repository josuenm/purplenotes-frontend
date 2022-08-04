import axios from "axios";
import nookies from "nookies";

const api = axios.create({
  baseURL: "http://localhost:8080/users",
});

export const UserServices = {
  register: async (params) => {
    return await api
      .post("/register", params)
      .then((data) => data)
      .catch((error) => error.response);
  },

  login: async (params) => {
    return await api
      .post("/login", params)
      .then((data) => data)
      .catch((error) => error.response);
  },

  updateBasics: async (params) => {
    return await api
      .put("", params, {
        headers: { "jsnotes.token": nookies.get()["jsnotes.token"] },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },

  updatePassword: async (params) => {
    return await api
      .put("/password", params, {
        headers: { "jsnotes.token": nookies.get()["jsnotes.token"] },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },

  deleteAccount: async () => {
    return await api
      .delete("/delete", {
        headers: { "jsnotes.token": nookies.get()["jsnotes.token"] },
      })
      .then((data) => data)
      .catch((error) => error.response);
  },
};

import axios from "axios";
import nookies from "nookies";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${API_URL}/users`,
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

  updateBasicInfo: async (params) => {
    return await api
      .put("/", params, {
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

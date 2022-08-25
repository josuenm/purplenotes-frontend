import axios from "axios";
import { parseCookies } from "nookies";
import { LoginProps, RegisterProps, UserProps } from "../types/UserProps";

const api = axios.create({
  baseURL: "http://localhost:8080/users",
});

const userApi = {
  login: async (data: LoginProps) => {
    return await api
      .post("/login", data)
      .then((res) => res)
      .catch((err) => err.response);
  },

  register: async (data: RegisterProps) => {
    return await api
      .post("/register", data)
      .then((res) => res)
      .catch((err) => err.response);
  },

  updateBasics: async (data: UserProps) => {
    return await api
      .put("/", data, {
        headers: {
          "purplenotes.token": parseCookies()["purplenotes.token"],
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
  },

  newPassword: async (password: string) => {
    return await api
      .put(
        "/password",
        { password },
        {
          headers: {
            "purplenotes.token": parseCookies()["purplenotes.token"],
          },
        }
      )
      .then((res) => res)
      .catch((err) => err.response);
  },

  deleteAccount: async () => {
    return await api
      .delete("/delete", {
        headers: {
          "purplenotes.token": parseCookies()["purplenotes.token"],
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
  },
};

export default userApi;

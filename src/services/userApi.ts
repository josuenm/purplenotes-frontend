import axios from "axios";
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
      .put("/", data)
      .then((res) => res)
      .catch((err) => err.response);
  },
};

export default userApi;

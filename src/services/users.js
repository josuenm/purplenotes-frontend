import { Api } from "./api";

export const UserServices = {
  register: async (params) => await Api.post("/users/register", params),
  login: async (params) => {
    const response = await Api.post("/users/login", params);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.token);
    return response.data;
  },
  loggout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
  updateBasics: async (params) => {
    return await Api.put("/users", params, {
      headers: { "access-token": localStorage.getItem("token") },
    });
  },
  updatePassword: async (params) => {
    await Api.put("/users/password", params, {
      headers: { "access-token": localStorage.getItem("token") },
    });
  },
  deleteAccount: async () => {
    const res = await Api.delete("/users/delete", {
      headers: { "access-token": localStorage.getItem("token") },
    });

    if (res) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return true;
    } else {
      return false;
    }
  },
};

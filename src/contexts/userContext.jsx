import { createContext, useContext, useEffect, useState } from "react";
import { GlobalToolsContext } from "./globalToolsContext";
import { UserServices } from "../services/axios/users";
import { useNavigate } from "react-router-dom";
import nookies from "nookies";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { handleLoading } = useContext(GlobalToolsContext);

  const navigation = useNavigate();

  function handleUser({ name, email }) {
    localStorage.setItem("jsnotes.user", JSON.stringify({ name, email }));
    setUser({ name, email });
  }

  async function Login(data) {
    handleLoading(true);
    const response = await UserServices.login(data);

    switch (response.status) {
      case 200:
        nookies.set(null, "jsnotes.token", response.data.token);
        handleUser({
          name: response.data.user.name,
          email: response.data.user.email,
        });
        navigation("/dashboard");
        break;
    }

    handleLoading(false);
  }

  async function Register(data) {
    handleLoading(true);
    const response = await UserServices.register(data);

    switch (response.status) {
      case 201:
        nookies.set(null, "jsnotes.token", response.data.token);
        handleUser({
          name: response.data.user.name,
          email: response.data.user.email,
        });
        navigation("/dashboard");
        break;
    }

    handleLoading(false);
  }

  async function UpdateBasicInfo(data) {
    if (user.name === data.name && user.email === data.email) {
      return;
    }
    handleLoading(true);
    const response = await UserServices.updateBasicInfo(data);

    switch (response.status) {
      case 200:
        handleUser({
          name: response.data.name,
          email: response.data.email,
        });
        break;
    }

    handleLoading(false);
  }

  async function UpdatePassword(data) {
    handleLoading(true);
    const response = await UserServices.updatePassword(data);

    switch (response.status) {
      case 200:
        handleLoading(false);
        return true;
        break;
    }

    handleLoading(false);
  }

  async function DeleteAccount() {
    handleLoading(true);
    const response = await UserServices.deleteAccount();

    switch (response.status) {
      case 204:
        localStorage.removeItem("jsnotes.token");
        await nookies.destroy(null, "jsnotes.token");
        navigation("/");
        break;
    }

    handleLoading(false);
  }

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("jsnotes.user"));
    setUser(userLocalStorage);
  }, []);

  return (
    <UserContext.Provider
      value={{
        Login,
        Register,
        user,
        UpdateBasicInfo,
        UpdatePassword,
        DeleteAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

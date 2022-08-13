import { createContext, useContext, useEffect, useState } from "react";
import { GlobalToolsContext } from "./globalToolsContext";
import { UserServices } from "../services/axios/users";
import { useNavigate } from "react-router-dom";
import { setCookie, destroyCookie } from "nookies";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { handleLoading, handleError } = useContext(GlobalToolsContext);

  const navigation = useNavigate();

  function handleUser({ name, email }) {
    localStorage.setItem("purplenotes.user", JSON.stringify({ name, email }));
    setUser({ name, email });
  }

  async function Login(data) {
    handleLoading(true);
    const response = await UserServices.login(data);

    switch (response.status) {
      case 200:
        setCookie(null, "purplenotes.token", response.data.token);
        handleUser({
          name: response.data.user.name,
          email: response.data.user.email,
        });

        navigation("/dashboard");
        break;

      case 401:
        handleError("Incorrect email or password");
        break;

      case 404:
        handleError("User not found");
        break;

      default:
        handleError("Something wrong, try again");
        break;
    }

    handleLoading(false);
  }

  async function Register(data) {
    handleLoading(true);
    const response = await UserServices.register(data);

    switch (response.status) {
      case 201:
        setCookie(null, "purplenotes.token", response.data.token);
        handleUser({
          name: response.data.user.name,
          email: response.data.user.email,
        });
        navigation("/dashboard");
        break;

      case 409:
        handleError("User already exists");
        break;

      default:
        handleError("Something wrong, try again");
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

      default:
        handleError("Something wrong, try again");
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

      default:
        handleError("Something wrong, try again");
        break;
    }

    handleLoading(false);
  }

  async function DeleteAccount() {
    handleLoading(true);
    const response = await UserServices.deleteAccount();

    switch (response.status) {
      case 204:
        navigation("/");
        localStorage.removeItem("purplenotes.user");
        await nookies.destroy(null, "purplenotes.token");
        break;

      default:
        handleError("Something wrong, try again");
        break;
    }

    handleLoading(false);
  }

  async function Exit() {
    navigation("/");
    localStorage.removeItem("purplenotes.user");
    destroyCookie(null, "purplenotes.token");
  }

  useEffect(() => {
    const userLocalStorage = JSON.parse(
      localStorage.getItem("purplenotes.user")
    );
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
        Exit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

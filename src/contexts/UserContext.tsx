import userApi from "@services/userApi";
import Router from "next/router";
import nookies from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import { LoginProps, RegisterProps, UserProps } from "../types/UserProps";
import { GlobalToolsContext } from "./GlobalToolsContext";

interface ProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  Login: (data: LoginProps) => Promise<void>;
  Register: (data: RegisterProps) => Promise<void>;
  UpdateBasics: (data: UserProps) => Promise<void>;
  user: UserProps | undefined;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: ProviderProps) => {
  const { handleLoading, handleAlert } = useContext(GlobalToolsContext);

  const [user, setUser] = useState<UserProps | undefined>();

  function handleUser(
    token?: string | undefined,
    user?: UserProps | undefined
  ) {
    if (token) {
      nookies.set(undefined, "purplenotes.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 1 month
      });
    }

    if (user) {
      localStorage.setItem("purplenotes.user", JSON.stringify(user));
      setUser(user);
    }
  }

  async function Login(data: LoginProps) {
    handleLoading(true);

    const response = await userApi.login(data);

    switch (response.status) {
      case 200:
        handleUser(response.data.token, {
          name: response.data.user.name,
          email: response.data.user.email,
        });
        Router.push("/dashboard");
        break;

      case 401:
        handleAlert("error", "Email or password is incorrect");
        break;

      case 404:
        handleAlert("error", "Email or password is incorrect");
        break;

      default:
        handleAlert("error", "Email or password is incorrect");
        break;
    }

    handleLoading(false);
  }

  async function Register(data: RegisterProps) {
    handleLoading(true);

    const response = await userApi.register(data);

    switch (response.status) {
      case 201:
        handleUser(response.data.token, {
          name: response.data.user.name,
          email: response.data.user.email,
        });
        Router.push("/dashboard");
        break;

      case 401:
        handleAlert("error", "Email or password is incorrect");
        break;

      case 404:
        handleAlert("error", "Email or password is incorrect");
        break;

      case 409:
        handleAlert("error", "User already exists");
        break;

      default:
        handleAlert("error", "Email or password is incorrect");
        break;
    }

    handleLoading(false);
  }

  async function UpdateBasics(data: UserProps) {
    handleLoading(true);

    if (user?.name === data.name && user?.email === data.email) {
      handleLoading(false);
      handleAlert("info", "Change something to update");
      return;
    }

    const response = await userApi.updateBasics(data);

    switch (response.status) {
      case 200:
        handleUser(undefined, {
          name: response.data.user.name,
          email: response.data.user.email,
        });
        handleAlert("success", "User updated");
        break;

      case 401:
        handleAlert("error", "Email or password is incorrect");
        break;

      case 404:
        handleAlert("error", "Email or password is incorrect");
        break;

      case 409:
        handleAlert("error", "User already exists");
        break;

      default:
        handleAlert("error", "Email or password is incorrect");
        break;
    }

    handleLoading(false);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      let localUser = JSON.parse(
        localStorage.getItem("purplenotes.user") as string
      );
      setUser(localUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ Login, Register, UpdateBasics, user }}>
      {children}
    </UserContext.Provider>
  );
};

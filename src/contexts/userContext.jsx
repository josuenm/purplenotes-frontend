import React, { createContext } from "react";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({
  name: "",
  email: "",
});

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Sahil", email: "abc@gmail.com" });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

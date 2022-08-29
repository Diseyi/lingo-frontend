import React, { createContext, ReactNode, useState } from "react";

type Props = {
  username?: string;
  token?: string;
  setUsername?: any;
  setToken?: any;
  children?: any;
};

export const AuthContext = createContext<Props>({});

const AuthProvider = ({ children }: Props) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ username, setUsername, token, setToken }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

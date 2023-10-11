import React, { useReducer, useEffect, createContext } from "react";

export const AuthContext = createContext({});

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user") as any);

  //   if (user) {
  //     dispatch({ type: "LOGIN", payload: user });
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

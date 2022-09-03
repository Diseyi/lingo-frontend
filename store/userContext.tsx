import React, { useReducer, useEffect, createContext } from "react";

export const UserContext = createContext({});

export const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GETUSER":
      return { user: action.payload };
    default:
      return state;
  }
};

const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("group") as any);

    if (user) {
      dispatch({ type: "GETUSER", payload: user });
    }
  }, []);

  console.log("UserContext state:", state);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

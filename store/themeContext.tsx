import React, { useReducer, createContext } from "react";

export const ThemeContext = createContext({});

export const themeReducer = (state: any, action: { type: any }) => {
  switch (action.type) {
    case "dark":
      return "light";
    case "light":
      return "dark";
    default:
      return state;
  }
};

const Theme = ({ children }: any) => {
  const [state, dispatch] = useReducer(themeReducer, "light");

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;

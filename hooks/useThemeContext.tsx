import { ThemeContext } from "../store/themeContext";
import { useContext } from "react";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};

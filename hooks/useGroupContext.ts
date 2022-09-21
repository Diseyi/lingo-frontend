
import { UserContext } from "../store/userContext";
import { useContext } from "react";

export const useGroupContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};

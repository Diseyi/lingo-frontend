import { useAuthContext } from "./useAuthContext";
import { useGroupContext } from "./useGroupContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext() as any;
  const { dispatch: dispatchWorkouts } = useGroupContext() as any;

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchWorkouts({ type: "GETUSER", payload: null });
  };

  return { logout };
};

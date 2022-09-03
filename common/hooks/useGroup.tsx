import axios from "axios";
import { useState } from "react";
import { useGroupContext } from "./useGroupContext";
import { useAuthContext } from "./useAuthContext";

const LINGO_IP = process.env.LINGO_IP as string;

export const useGroup = () => {
  const [error, setError] = useState(null as any);
  const [isLoading, setIsLoading] = useState<any>(null);

    const { dispatch } = useGroupContext() as any;
    const {user} = useAuthContext() as any

  const getGroup = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios({
        url: LINGO_IP + `/api/users/${user.id}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setIsLoading(false);
      const data = response?.data

      localStorage.setItem("group", JSON.stringify(data));
      dispatch({ type: "GETUSER", payload: data });

      return data;
    } catch (error: any) {
      setIsLoading(false);
      setError("Bad Request");
    }
  };

  return { getGroup, isLoading, error };
};

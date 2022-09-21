import axios, { Method } from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const LINGO_IP = process.env.LINGO_IP as string;

export const useAuth = () => {
  const [error, setError] = useState({} as any);
  const [isLoading, setIsLoading] = useState<any>(null);
  const { dispatch } = useAuthContext() as any;

  const auth = async (url: string, method: Method, body: {username: string, password: string}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios({
        url: LINGO_IP + url,
        method: method,
        headers: { "Content-Type": "application/json" },
        data: body,
      });

      const data = response?.data;

      localStorage.setItem("user", JSON.stringify(data));

      dispatch({ type: "LOGIN", payload: data });

      setIsLoading(false);
    } catch (err: any) {
      const Error = error.response.statusText;
      setIsLoading(false);
      // setError(...error, err);
    }
  };

  return { auth, isLoading, error };
};

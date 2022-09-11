import axios, { Method } from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const LINGO_IP = process.env.LINGO_IP as string;

export const useAuth = () => {
  const [error, setError] = useState(null as any);
  const [isLoading, setIsLoading] = useState<any>(null);
  const { dispatch } = useAuthContext() as any;

  const auth = async (url: string, method: Method, body: any) => {
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
    } catch (error: any) {
      const Error = error.response.statusText;
      setIsLoading(false);
      setError("Bad Request");
    }
  };

  return { auth, isLoading, error };
};

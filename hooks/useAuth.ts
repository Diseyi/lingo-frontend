import axios, { Method } from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import socket from "../socket";

const LINGO_IP = process.env.LINGO_IP as string;

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext() as any;

  const auth = async (url: string, method: Method, body: { username: string, password: string }) => {
    setIsLoading(true);

    try {
      const response = await axios({
        url: LINGO_IP + url,
        method: method,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(body),
      });

      const data = response?.data;
      const user = data.username
      socket.auth = { user };
      socket.connect();

      localStorage.setItem("user", JSON.stringify(data));

      dispatch({ type: "LOGIN", payload: data });

      setIsLoading(false);
      return data
    } catch (error: any) {
      const errorResponse = error.response;
      setIsLoading(false);
      return errorResponse
    }
  };

  return { auth, isLoading };
};

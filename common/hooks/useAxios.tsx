import { useState } from "react";
import axios, { Method } from "axios";

const LINGO_IP = process.env.LINGO_IP as string;

const useAxios = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const authenticate = async (url: string, method: Method, body: any) => {
    try {
      const response = await axios({
        url: LINGO_IP + url,
        method: method,
        data: body,
      });
      const data = response?.data;
      setData(data);
    } catch (error: any) {
      setError(error);
    }

    return { error, data };
  };

  const fetchData = async (
    url: string,
    method: Method,
    body: any,
    Token: any
  ) => {
    try {
      const response = await axios({
        url: LINGO_IP + url,
        method: method,
        data: body,
        headers: {
          Authorization: `Bearer ${Token.token}`,
        },
      });
      const data = response?.data;
      setData(data);
    } catch (error: any) {
      setError(error);
    }

    return { error, data };
  };
  return { fetchData, authenticate };
};

export default useAxios;

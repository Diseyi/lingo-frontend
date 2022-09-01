
import axios, { Method } from "axios";

const LINGO_IP = process.env.LINGO_IP as string;

const useAxios = () => {

  const authenticate = async (url: string, method: Method, body: any) => {
    try {
      const response = await axios({
        url: LINGO_IP + url,
        method: method,
        data: body,
      });
      return {
        data: response?.data,
      };
    } catch (error: any) {
      return {
        error: error.response.data.error,
        status: error.response.status,
      };
    }
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
      return {
        data: response?.data,
      };
    } catch (error: any) {
      return {
        error: error,
      };
    }
  };
  return { fetchData, authenticate };
};

export default useAxios;

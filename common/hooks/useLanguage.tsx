import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const LINGO_IP = process.env.LINGO_IP as string;

export const useLanguage = () => {
  const [error, setError] = useState(null as any);
  const [isLoading, setIsLoading] = useState<any>(null);

  const { user } = useAuthContext() as any;

  const getLang = async (body: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios({
        url: LINGO_IP + "/api/users/lang",
        method: "patch",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: body,
      });
      setIsLoading(false);
      const data = response?.data;
      return data;
    } catch (error: any) {
      const Error = error.response.statusText;
      setIsLoading(false);
      setError("Bad Request");
    }
  };

  return { getLang, isLoading, error };
};

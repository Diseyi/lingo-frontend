import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const LINGO_IP = process.env.LINGO_IP as string;

export const useLanguage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { user } = useAuthContext() as any;

  const getLang = async (body: { lang: string; groups: Array<string> }) => {
    setIsLoading(true);

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
      return response;
    } catch (error: any) {
      setIsLoading(false);
      return error;
    }
  };

  return { getLang, isLoading };
};

import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const LINGO_IP = process.env.LINGO_IP as string;

export const useApi = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { user } = useAuthContext() as any

            const getData = async (pathname: string) => {
                setIsLoading(true);

                try {
                    const response = await axios({
                        url: LINGO_IP + `/api/users/${pathname}`,
                        method: "get",
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    });
                    const data = response?.data

                    setIsLoading(false);
                    return data

                } catch (error: any) {
                    setIsLoading(false);
                    return error
                }
            };


    return { isLoading, getData };
};

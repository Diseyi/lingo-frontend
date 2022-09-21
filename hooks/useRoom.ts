import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

const LINGO_IP = process.env.LINGO_IP as string;

export const useRoom = () => {
    const [error, setError] = useState(null as any);
    const [data, setData] = useState(null as any);
    const [isLoading, setIsLoading] = useState<any>(null);

    const { user } = useAuthContext() as any

    useEffect(() => {
        if (data === null) {
            const getGroup = async () => {
                setIsLoading(true);
                setError(null);

                try {
                    const response = await axios({
                        url: LINGO_IP + `/api/users/groups`,
                        method: "get",
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    });
                    const data = response?.data[0].groups
                    setIsLoading(false);
                    setData(data)

                } catch (error: any) {
                    setIsLoading(false);
                    setError("Error!");
                }
            };
            getGroup()
        }
    },)



    return { data, isLoading, error };
};

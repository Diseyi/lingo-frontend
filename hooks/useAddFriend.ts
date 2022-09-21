import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

const LINGO_IP = process.env.LINGO_IP as string;

export const useAddFriend = () => {
    const [errorA, setError] = useState(null as any);
    const [dataA, setData] = useState(null as any);
    const [isLoadingA, setIsLoading] = useState<any>(null);

    const { user } = useAuthContext() as any


    const getFriend = async (friend: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios({
                url: LINGO_IP + `/api/users/${friend}`,
                method: "get",
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const data = response?.data

            setIsLoading(false);
            setData(data)

        } catch (error: any) {
            setIsLoading(false);
            setError("Friend does not exist");
        }
    }


    return { dataA, isLoadingA, errorA, getFriend };
};

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

const LINGO_IP = process.env.LINGO_IP as string;

export const useGetUsers = () => {
    const [UserError, setError] = useState(null as any);
    const [Userdata, setDataUserdata] = useState(null as any);
    const [UserisLoading, setUserIsLoading] = useState<any>(null);

    const { user } = useAuthContext() as any


    const getUsers = async () => {
        setUserIsLoading(true);
        setError(null);

        try {
            const response = await axios({
                url: LINGO_IP + `/api/users`,
                method: "get",
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const data = response?.data

            setUserIsLoading(false);
            setDataUserdata(data)

        } catch (error: any) {
            setUserIsLoading(false);
            setError("Error");
        }
    }


    return { Userdata, UserisLoading, UserError, getUsers };
};

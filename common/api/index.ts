import axios from "axios"

const LINGO_IP = process.env.LINGO_IP as string;

export const APIBASE = {
    Lingo: LINGO_IP
}

export const getAuthHeaders = () => {

    const SessionToken = sessionStorage.getItem("auth") || "";
    const parsedToken = SessionToken ? JSON.parse(SessionToken) : "";

    if (!parsedToken) {
        return {
            Authorization: ''
        }
    }

    return {
        Authorization: parsedToken.token
    }
}

export const axiosInstance = (baseURL: string) => {
    return axios.create({
        baseURL,
        headers: {
            ...getAuthHeaders
        }
    })
}
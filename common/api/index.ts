
import axios from "axios"


const LINGO_IP = process.env.LINGO_IP as string;

export const APIBASE = {
    Lingo: LINGO_IP
}


export const axiosInstance = (baseURL: string) => {
    return axios.create({
        baseURL,
    })
}

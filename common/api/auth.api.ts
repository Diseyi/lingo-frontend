import { APIBASE, axiosInstance } from ".";
import { Request } from "../utilities";
import useAxios from "../hooks/useAxios";


const http = useAxios()

export class Authentication {
    static login = () => 

    static signup = (payload: any) => Request(() => http.post('/signup', payload))
}
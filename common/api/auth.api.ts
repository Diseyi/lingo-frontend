import { APIBASE, axiosInstance } from ".";
import { Request } from "../utilities";


const http = axiosInstance(APIBASE.Lingo + "/api/users")

export class Authentication {
    static login = (payload: any) => Request(() => http.post('/login', payload))

    static signup = (payload: any) => Request(() => http.post('/signup', payload))
}
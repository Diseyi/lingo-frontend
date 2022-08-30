import { APIBASE, axiosInstance } from ".";
import { Request } from "../utilities";



const http = axiosInstance(APIBASE.Lingo + "/api/users")

export class ChatApi {

    static async getUsers() {
        return await Request(() => http.get('/'))
    }
}
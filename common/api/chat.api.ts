import { APIBASE, axiosInstance, getAuthHeaders } from ".";
import { Request } from "../utilities";


const http = axiosInstance(APIBASE.Lingo + "/api/users")

export class ChatApi {

    static async saveLanguage(payload: any) {
        return await Request(() => http.patch(`/lang`, payload))
    }
}
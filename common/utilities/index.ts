export const Request = async (requestMethod: any) => {
    try {
        const getRequest = await requestMethod()

        return {
            data: getRequest.data,
            status: getRequest.status,
            statusText: getRequest.statusText
        }
    }
    catch(error: any) {
        return {
            data: null,
            error: "an error occured",
        }
    }
}
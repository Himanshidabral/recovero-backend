import { ServiceResponseInterface } from "../interfaces/service.response.interface";
export function serviceResponse(error: boolean, message: string, data: any, responseText?: string): ServiceResponseInterface {
    return { error: error, responseText: responseText, message: message, data: data };
}
import { ResInterface } from "../interfaces/request.interface";
declare class ResponseHelper {
    ok(res: ResInterface, statusText: any, message: any, data: any): Promise<void>;
    badRequest(res: any, statusText: string, message: any, data?: any): Promise<void>;
    notAcceptable(res: any, statusText: string, message: any, data?: any): Promise<void>;
    conflict(res: any, statusText: string, message: any, data?: any): Promise<void>;
    noContent(res: any, statusText: string, message: any, data?: any): Promise<void>;
    unAuthenticated(res: any, statusText: string, message?: any, data?: any): Promise<void>;
    unAuthorize(res: any, statusText: string, message?: any, data?: any): Promise<void>;
    serverError(res: any, message?: string, data?: any): Promise<void>;
    created(res: any, statusText: string, message?: any, data?: any): Promise<void>;
    acceptanceRequired(res: any, statusText: string, message?: any, data?: any): Promise<void>;
}
declare const _default: ResponseHelper;
export default _default;

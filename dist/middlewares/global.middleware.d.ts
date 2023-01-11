import { ReqInterface, ResInterface } from '../interfaces/request.interface';
declare class GlobalMiddleware {
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    formDataParser(req: ReqInterface, res: any, next: any): void;
    /**
    * Authenticate Admin Incoming request
    * @param req
    * @param res
    * @param next
    */
    authenticateAdmin(req: any, res: any, next: any): Promise<void>;
    /**
    * Authenticate Admin Incoming request
    * @param req
    * @param res
    * @param next
    */
    restrictUser(req: ReqInterface, res: ResInterface, next: any): Promise<void>;
}
declare const _default: GlobalMiddleware;
export default _default;

import { ResInterface, ReqInterface, Next } from "../../interfaces/request.interface";
declare class AuthController {
    createAdmin(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    login(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    changePassword(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
}
declare const _default: AuthController;
export default _default;

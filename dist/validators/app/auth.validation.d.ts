import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";
declare class AuthValidation {
    static login(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    static verifyOtp(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
}
export default AuthValidation;

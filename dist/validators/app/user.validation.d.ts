import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";
declare class UserValidation {
    static completeProfile(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    static contact(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    static contactSupport(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    static addDeviceInfo(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
}
export default UserValidation;

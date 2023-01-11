import { ResInterface, ReqInterface, Next } from "../../interfaces/request.interface";
declare class UserController {
    userList(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    addUser(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
}
declare const _default: UserController;
export default _default;

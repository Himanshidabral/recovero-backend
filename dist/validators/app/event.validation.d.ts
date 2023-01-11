import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";
declare class EventValidation {
    static addEvent(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    static editEvent(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    static addEventType(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
}
export default EventValidation;

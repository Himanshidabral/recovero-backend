import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";
declare class ContactValidation {
    static addContact(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
    static editContact(req: ReqInterface, res: ResInterface, next: Next): Promise<void>;
}
export default ContactValidation;

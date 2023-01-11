import { Next } from "../request.interface";
export interface ContactServiceInterface {
    addContacts(userId: any, data: any, next: Next): Promise<any>;
    contactList(userId: any, next: Next): Promise<any>;
    contactDelete(userId: any, contactId: any, next: Next): Promise<any>;
}

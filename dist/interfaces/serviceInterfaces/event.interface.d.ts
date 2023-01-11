import { Next } from "../request.interface";
export interface EventServiceInterface {
    addEvent(userId: any, data: any, next: Next): Promise<any>;
    addEventType(userId: any, data: any, next: Next): Promise<any>;
    eventList(userId: any, queryString: any, next: Next): Promise<any>;
    eventTypeList(userId: any, queryString: any, next: Next): Promise<any>;
    changeStatus(userId: any, eventId: any, next: Next): Promise<any>;
    editEvent(userId: any, eventId: any, data: any, next: Next): Promise<any>;
}

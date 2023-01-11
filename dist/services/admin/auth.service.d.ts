import { Next } from "../../interfaces/request.interface";
import { ServiceResponseInterface } from "../../interfaces/service.response.interface";
declare class AuthService {
    /**
     * Create Admin
    * @param data:{email:string,password:string}
    * @param next:NEXT
    * @returns
    */
    createAdmin(data: {
        email: string;
        password: string;
        name: string;
    }, next: Next): Promise<ServiceResponseInterface>;
    /**
     * login
    * @param data:{email:string,password:string,role:number}
    * @param next:NEXT
    * @returns
    */
    login(data: {
        email: string;
        password: string;
        role: number;
    }, next: any): Promise<ServiceResponseInterface>;
    /**
     * Change Password
    * @param data:{passwordCurrent:string,password:string}
    * @param adminId:string
    * @param next:NEXT
    * @returns
    */
    changePassword(adminId: string, data: {
        passwordCurrent: string;
        password: string;
    }, next: any): Promise<ServiceResponseInterface>;
}
declare const _default: AuthService;
export default _default;

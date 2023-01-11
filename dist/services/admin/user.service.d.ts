import { ServiceResponseInterface } from "../../interfaces/service.response.interface";
declare class UserService {
    /**
     * User List
     *
    * @param queryString
    * @param adminId
    * @returns
    */
    userList(queryString: any, adminId: any): Promise<ServiceResponseInterface>;
    /**
     * Add User
     * @param data
     * @param adminId
     */
    addUser(adminId: any, data: any): Promise<ServiceResponseInterface>;
}
declare const _default: UserService;
export default _default;

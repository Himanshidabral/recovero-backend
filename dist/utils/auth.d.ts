declare class Auth {
    getToken(data: any, expiresIn: any, next: any): Promise<any>;
    encryptPassword(password: string): Promise<any>;
    comparePassword(reqPassword: any, storedPassword: any): Promise<unknown>;
}
declare const _default: Auth;
export default _default;

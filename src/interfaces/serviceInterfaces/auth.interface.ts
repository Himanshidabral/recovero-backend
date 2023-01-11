import { Request, Response, NextFunction } from "express"
import { Next } from "../request.interface";
export interface AuthServiceInterface {
    logIn(data: any, next: NextFunction): Promise<any>;
    verifyOtp(data:any,next:Next):Promise<any>;

}

// export interface AuthControllerInterface {
//     login(req: Request, res: Response, next: NextFunction): any
//     logOut(req: Request, res: Response, next: NextFunction): any
//     register(req: Request, res: Response, next: NextFunction): any
//}
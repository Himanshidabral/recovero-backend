import { Request, Response, NextFunction } from "express"
import { Next } from "../request.interface";
export interface UserServiceInterface {
    completeProfile(userId: any, data: any,file:any, next: NextFunction): Promise<any>;


}


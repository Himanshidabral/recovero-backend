import { NextFunction } from "express";
export interface UserServiceInterface {
    completeProfile(userId: any, data: any, file: any, next: NextFunction): Promise<any>;
}

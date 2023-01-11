import { NextFunction } from "express";
import { Next } from "../request.interface";
export interface AuthServiceInterface {
    logIn(data: any, next: NextFunction): Promise<any>;
    verifyOtp(data: any, next: Next): Promise<any>;
}

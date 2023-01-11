import { Request, Response, NextFunction } from 'express';
export interface ReqInterface extends Request {
    adminData: any;
    startTime: number;
    errorStatus: number;
    userData: any;
}
/**
 * @interface
 *
 */
export interface ResInterface extends Response {
    logMsg: string;
    startTime: number;
    api: string;
    method: string;
}
/**
 * @interface
 */
export interface Next extends NextFunction {
}

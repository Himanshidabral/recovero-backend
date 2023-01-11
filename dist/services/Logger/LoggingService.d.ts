import { Request } from "express";
declare class LoggerService {
    private DEBUG_MODE;
    constructor();
    exceptions(error: Error, req: Request): void;
}
export declare const Logger: LoggerService;
export {};

import * as fs from "fs";
import { Request } from "express"
import { now } from "mongoose";
class LoggerService {

    private DEBUG_MODE: any = true;

    constructor() {
        this.DEBUG_MODE = process.env.DEBUG;
        console.log("DEBUG MODE >> ", this.DEBUG_MODE)
    }
    
    
    exceptions(error: Error, req: Request) {
      
     let errorLog=error.message + now() + "\n";
            fs.appendFile("logs.log", errorLog, (err) => {
                if(err){
                    console.log(err);
                }
                else {
                    // Get the file contents after the append operation
                    console.log("\nFile Contents of file after append:",
                      fs.readFileSync("logs.log", "utf8"));
                  }
            });
    }

    
 
}

export const Logger = new LoggerService;








"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const fs = require("fs");
const mongoose_1 = require("mongoose");
class LoggerService {
    constructor() {
        this.DEBUG_MODE = true;
        this.DEBUG_MODE = process.env.DEBUG;
        console.log("DEBUG MODE >> ", this.DEBUG_MODE);
    }
    exceptions(error, req) {
        let errorLog = error.message + (0, mongoose_1.now)() + "\n";
        fs.appendFile("logs.log", errorLog, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                // Get the file contents after the append operation
                console.log("\nFile Contents of file after append:", fs.readFileSync("logs.log", "utf8"));
            }
        });
    }
}
exports.Logger = new LoggerService;

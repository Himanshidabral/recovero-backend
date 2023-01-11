"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const cron = require('node-cron');
const server = require('http').Server(server_1.default);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});

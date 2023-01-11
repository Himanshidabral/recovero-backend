"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = require("./v1/admin/auth.routes");
const user_routes_1 = require("./v1/admin/user.routes");
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.admin();
    }
    admin() {
        this.router.use('/admin/auth', auth_routes_1.default);
        this.router.use('/admin/user', user_routes_1.default);
    }
}
exports.default = new Routes().router;

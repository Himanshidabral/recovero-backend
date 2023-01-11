"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../../../controllers/admin/auth.controller");
const global_middleware_1 = require("../../../middlewares/global.middleware");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.get();
        this.patch();
        this.post();
        this.put();
        this.delete();
    }
    get() {
    }
    post() {
        this.router.post('/login', auth_controller_1.default.login);
        this.router.post('/create-admin', auth_controller_1.default.createAdmin);
        this.router.post('/change-password', global_middleware_1.default.authenticateAdmin, auth_controller_1.default.changePassword);
    }
    patch() {
    }
    put() {
    }
    delete() {
    }
}
exports.default = new AuthRoutes().router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../../controllers/admin/user.controller");
const global_middleware_1 = require("../../../middlewares/global.middleware");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.get();
        this.patch();
        this.post();
        this.put();
        this.delete();
    }
    get() {
        this.router.get('/list', global_middleware_1.default.authenticateAdmin, global_middleware_1.default.restrictUser, user_controller_1.default.userList);
    }
    post() {
        this.router.post('/add-user', global_middleware_1.default.authenticateAdmin, global_middleware_1.default.restrictUser, user_controller_1.default.addUser);
    }
    patch() {
    }
    put() {
    }
    delete() {
    }
}
exports.default = new UserRoutes().router;

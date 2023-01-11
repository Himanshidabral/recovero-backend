"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_helper_1 = require("../../helpers/response.helper");
const user_service_1 = require("../../services/admin/user.service");
class UserController {
    userList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let queryString = req.query;
                let adminId = req.adminData._id;
                const { error, message, data } = yield user_service_1.default.userList(queryString, adminId);
                if (error) {
                    return response_helper_1.default.badRequest(res, "BAD_REQUEST", message, data);
                }
                return response_helper_1.default.ok(res, "SUCCESS", message, data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    addUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let adminId = req.adminData._id;
                let reqData = req.body;
                const { error, message, data } = yield user_service_1.default.addUser(adminId, reqData);
                if (error) {
                    return response_helper_1.default.badRequest(res, "BAD_REQUEST", message, data);
                }
                return response_helper_1.default.ok(res, "SUCCESS", message, data);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new UserController;

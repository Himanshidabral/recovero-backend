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
const admin_model_1 = require("../../models/admin.model");
const auth_1 = require("../../utils/auth");
const features_1 = require("../../utils/features");
const service_response_1 = require("../../utils/service.response");
class UserService {
    /**
     * User List
     *
    * @param queryString
    * @param adminId
    * @returns
    */
    userList(queryString, adminId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let query = admin_model_1.default.find({ role: 2, createdBy: adminId });
            let countQuery = admin_model_1.default.find({ role: 2, createdBy: adminId });
            const totalCount = new features_1.Features(countQuery, queryString).getCount();
            const count = yield totalCount.query;
            /****************** Adding pagination and sorting to our list *************/
            const apiFeatures = new features_1.Features(query, queryString)
                .filtering()
                .sorting('created_at')
                .searching(["name", "email"])
                .pagination();
            const user = yield apiFeatures.query;
            user.map(u => {
                u.password = undefined;
            });
            const currentPage = (_a = queryString === null || queryString === void 0 ? void 0 : queryString.page) !== null && _a !== void 0 ? _a : 1;
            return (0, service_response_1.serviceResponse)(false, "User Fetched Successfully", { user, count, currentPage });
        });
    }
    /**
     * Add User
     * @param data
     * @param adminId
     */
    addUser(adminId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let isAdminExist = yield admin_model_1.default.findOne({ email: data.email, role: 2, createdBy: adminId });
            if (isAdminExist) {
                return (0, service_response_1.serviceResponse)(true, "User Already registered with this email id,Please use another!", {});
            }
            else {
                const encryptedPassword = yield auth_1.default.encryptPassword(data.password);
                isAdminExist = yield admin_model_1.default.create({
                    email: data.email,
                    role: 2,
                    createdBy: adminId,
                    name: data.name,
                    password: encryptedPassword
                });
            }
            return (0, service_response_1.serviceResponse)(false, "User Created Successfully!", {});
        });
    }
}
exports.default = new UserService;

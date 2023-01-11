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
const service_response_1 = require("../../utils/service.response");
class AuthService {
    /**
     * Create Admin
    * @param data:{email:string,password:string}
    * @param next:NEXT
    * @returns
    */
    createAdmin(data, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let isAdmin = yield admin_model_1.default.findOne({ email: data.email, role: 1 });
            if (isAdmin) {
                return (0, service_response_1.serviceResponse)(true, "User Already registered with this email id,Please use another!", {});
            }
            else {
                const encryptedPassword = yield auth_1.default.encryptPassword(data.password);
                isAdmin = yield admin_model_1.default.create({
                    email: data.email,
                    role: 1,
                    name: data.name,
                    password: encryptedPassword
                });
            }
            return (0, service_response_1.serviceResponse)(false, "User Created Successfully!", {});
        });
    }
    /**
     * login
    * @param data:{email:string,password:string,role:number}
    * @param next:NEXT
    * @returns
    */
    login(data, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let admin = yield admin_model_1.default.findOne({ email: data.email, role: data.role });
            if (!admin) {
                return (0, service_response_1.serviceResponse)(true, "Incorrect email or password!", {});
            }
            const isPasswordValid = yield auth_1.default.comparePassword(data.password, admin.password);
            if (!isPasswordValid) {
                return (0, service_response_1.serviceResponse)(true, "Invalid email or password!", {});
            }
            let payload = {
                _id: admin._id,
                role: data.role,
                email: admin.email,
                name: admin.name
            };
            let jwtToken = yield auth_1.default.getToken(payload, 100000, next);
            admin.password = undefined;
            const responseData = { admin, token: jwtToken };
            return (0, service_response_1.serviceResponse)(false, "Logged in successfully", responseData);
        });
    }
    /**
     * Change Password
    * @param data:{passwordCurrent:string,password:string}
    * @param adminId:string
    * @param next:NEXT
    * @returns
    */
    changePassword(adminId, data, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let admin = yield admin_model_1.default.findOne({ _id: adminId });
            if (!admin) {
                return (0, service_response_1.serviceResponse)(true, "Invalid Request!", {});
            }
            const isPasswordValid = yield auth_1.default.comparePassword(data.passwordCurrent, admin.password);
            if (!isPasswordValid) {
                return (0, service_response_1.serviceResponse)(true, "Invalid password!", {});
            }
            const encryptedPassword = yield auth_1.default.encryptPassword(data.password);
            admin.password = encryptedPassword;
            yield admin.save();
            return (0, service_response_1.serviceResponse)(false, "Password Changed Successfully", {});
        });
    }
}
exports.default = new AuthService;

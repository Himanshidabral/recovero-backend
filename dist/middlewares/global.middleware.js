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
const formidable = require("formidable");
const Env_1 = require("../environments/Env");
const Jwt = require("jsonwebtoken");
const cryptLib = require('@skavinvarnan/cryptlib');
const response_helper_1 = require("../helpers/response.helper");
const admin_model_1 = require("../models/admin.model");
class GlobalMiddleware {
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    formDataParser(req, res, next) {
        try {
            const form = formidable({ multiples: true });
            form.parse(req, (err, fields = {}, files) => {
                if (err) {
                    next(err);
                    return;
                }
                req.body.fields = Object.assign({}, fields);
                req.body.files = files;
                next();
            });
        }
        catch (error) {
            next(error);
        }
    }
    /**
    * Authenticate Admin Incoming request
    * @param req
    * @param res
    * @param next
    */
    authenticateAdmin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, Env_1.env)().nodeEnv == '!dev') {
            }
            const authHeader = req.headers.authorization;
            const token = authHeader ? authHeader.slice(7, authHeader.length) : null;
            try {
                Jwt.verify(token, (0, Env_1.env)().jwtSecret, ((error, decode) => __awaiter(this, void 0, void 0, function* () {
                    if (error) {
                        if (error.message == "jwt expired") {
                            req.errorStatus = 401;
                            return response_helper_1.default.unAuthenticated(res, "JWT_EXPIRED", "Admin Not Authorized", {});
                        }
                        if (error.message == "jwt must be provided") {
                            req.errorStatus = 401;
                            return response_helper_1.default.unAuthenticated(res, "JWT_NEEDED", "Admin Not Authorized", {});
                        }
                    }
                    else if (!decode) {
                        req.errorStatus = 401;
                        return response_helper_1.default.unAuthenticated(res, "JWT_INVALID", "Admin Not Authorized", {});
                    }
                    else {
                        let admin = yield admin_model_1.default.findOne({ _id: decode._id });
                        if (!admin) {
                            req.errorStatus = 401;
                            return response_helper_1.default.unAuthenticated(res, "ADMIN_NOT_FOUND", "Admin Not Authorized", {});
                        }
                        req.adminData = admin;
                        next();
                    }
                })));
            }
            catch (error) {
            }
        });
    }
    /**
    * Authenticate Admin Incoming request
    * @param req
    * @param res
    * @param next
    */
    restrictUser(req, res, next) {
        let admin = req.adminData;
        let role = admin.role;
        if (role == 2) {
            return response_helper_1.default.unAuthenticated(res, "JWT_INVALID", "Admin Not Authorized", {});
        }
        next();
    }
}
exports.default = new GlobalMiddleware();

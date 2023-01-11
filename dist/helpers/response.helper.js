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
class ResponseHelper {
    ok(res, statusText, message, data) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ status: 200, statusText: statusText !== null && statusText !== void 0 ? statusText : 'SUCCESS', message: message, data: data });
        });
    }
    badRequest(res, statusText, message, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(400).json({ status: 400, statusText: statusText ? statusText : 'BAD_REQUEST', message: message, data: data });
        });
    }
    notAcceptable(res, statusText, message, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(406).json({ status: 406, statusText: statusText ? statusText : 'NOT_ACCEPTABLE', message: message, data: data });
        });
    }
    conflict(res, statusText, message, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(409).json({ status: 409, statusText: statusText ? statusText : 'CONFLICT', message: message, data: data });
        });
    }
    noContent(res, statusText, message, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ status: 205, statusText: statusText ? statusText : '', message: message ? message : "Un-authenticated Request!", data: data });
        });
    }
    unAuthenticated(res, statusText, message = null, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(401).json({ status: 401, statusText: statusText ? statusText : 'UNAUTHORIZE', message: message ? message : "Un-authenticated Request!", data: data });
        });
    }
    unAuthorize(res, statusText, message = null, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(403).json({ status: 403, statusText: statusText ? statusText : 'UNAUTHORIZE', message: message ? message : "Un-authenticated Request!", data: data });
        });
    }
    serverError(res, message = null, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(500).json({ status: 500, message: message ? message : "Internal Server Error!", data: data });
        });
    }
    created(res, statusText, message = null, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(201).json({ status: 201, statusText: statusText ? statusText : 'CREATED', message: message ? message : "created!", data: data });
        });
    }
    acceptanceRequired(res, statusText, message = null, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(406).json({ status: 406, statusText: statusText ? statusText : 'FAILED', message: message ? message : "created!", data: data });
        });
    }
}
exports.default = new ResponseHelper();

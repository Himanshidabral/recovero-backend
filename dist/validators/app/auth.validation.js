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
const validation_helper_1 = require("../../helpers/validation.helper");
const Joi = require("joi");
class AuthValidation {
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object().keys({
                country_code: Joi.string().required(),
                mobile_no: Joi.number().min(Math.pow(10, 6)).max(Math.pow(10, 14)).required().messages({
                    'number.min': 'Mobile number should be equal to greater than  6 digit.',
                    'number.max': 'Mobile number should be equal to less than  14 digit.'
                })
            });
            const isValid = yield (0, validation_helper_1.validate)(req.body, res, schema);
            if (isValid) {
                next();
            }
        });
    }
    static verifyOtp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object().keys({
                mobile_no: Joi.number().required(),
                country_code: Joi.string().required(),
                otp: Joi.string().required(),
            });
            const isValid = yield (0, validation_helper_1.validate)(req.body, res, schema);
            if (isValid) {
                next();
            }
        });
    }
}
exports.default = AuthValidation;

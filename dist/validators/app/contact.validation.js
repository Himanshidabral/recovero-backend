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
class ContactValidation {
    static addContact(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let contacts = Joi.object().keys({
                first_name: Joi.string().required(),
                last_name: Joi.optional(),
                mobile_no: Joi.number().min(Math.pow(10, 6)).max(Math.pow(10, 14)).required().messages({
                    'number.min': 'Mobile number should be equal to greater than  6 digit.',
                    'number.max': 'Mobile number should be equal to less than  14 digit.'
                }),
                country_code: Joi.string().required(),
            });
            const schema = Joi.object().keys({
                contacts: Joi.array().items(contacts).required()
            });
            const isValid = yield (0, validation_helper_1.validate)(req.body, res, schema);
            if (isValid) {
                next();
            }
        });
    }
    static editContact(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let schema = Joi.object().keys({
                first_name: Joi.optional(),
                last_name: Joi.optional(),
                mobile_no: Joi.number().min(Math.pow(10, 6)).max(Math.pow(10, 14)).required().messages({
                    'number.min': 'Mobile number should be equal to greater than  6 digit.',
                    'number.max': 'Mobile number should be equal to less than  14 digit.'
                }),
                country_code: Joi.string().required(),
            });
            const isValid = yield (0, validation_helper_1.validate)(req.body, res, schema);
            if (isValid) {
                next();
            }
        });
    }
}
exports.default = ContactValidation;

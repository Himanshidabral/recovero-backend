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
class EventValidation {
    static addEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object().keys({
                event_type: Joi.string().required(),
                name: Joi.string().required(),
                repeat_days: Joi.array().required().items(Joi.valid(0, 1, 2, 3, 4, 5, 6)),
                start_time: Joi.string().required(),
                emergency_contacts: Joi.array().required(),
                status: Joi.optional()
            });
            const isValid = yield (0, validation_helper_1.validate)(req.body, res, schema);
            if (isValid) {
                next();
            }
        });
    }
    static editEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object().keys({
                event_type: Joi.optional(),
                name: Joi.string().optional(),
                repeat_days: Joi.optional(),
                start_time: Joi.optional(),
                emergency_contacts: Joi.optional(),
                status: Joi.optional()
            });
            const isValid = yield (0, validation_helper_1.validate)(req.body, res, schema);
            if (isValid) {
                next();
            }
        });
    }
    static addEventType(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object().keys({
                name: Joi.string().required(),
            });
            const isValid = yield (0, validation_helper_1.validate)(req.body, res, schema);
            if (isValid) {
                next();
            }
        });
    }
}
exports.default = EventValidation;

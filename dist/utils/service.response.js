"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceResponse = void 0;
function serviceResponse(error, message, data, responseText) {
    return { error: error, responseText: responseText, message: message, data: data };
}
exports.serviceResponse = serviceResponse;

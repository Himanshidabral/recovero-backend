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
const Jwt = require("jsonwebtoken");
const Env_1 = require("../environments/Env");
const Bcrypt = require("bcrypt");
class Auth {
    getToken(data, expiresIn, next) {
        return __awaiter(this, void 0, void 0, function* () {
            expiresIn = "30d";
            try {
                return Jwt.sign(data, (0, Env_1.env)().jwtSecret, {
                    expiresIn
                });
            }
            catch (err) {
                return next(err);
            }
        });
    }
    encryptPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(hash);
                    }
                });
            });
        });
    }
    comparePassword(reqPassword, storedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Bcrypt.compare(reqPassword, storedPassword, ((err, isSame) => {
                    if (err) {
                        reject(err);
                    }
                    else if (!isSame) {
                        resolve(false);
                    }
                    else {
                        resolve(true);
                    }
                }));
            });
        });
    }
}
exports.default = new Auth();

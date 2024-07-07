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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const index_js_1 = __importDefault(require("../config/index.js"));
const userSchema_js_1 = require("../models/userSchema.js");
const catchAsyncErrors_js_1 = require("./catchAsyncErrors.js");
const error_1 = __importDefault(require("./error"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.isAuthenticated = (0, catchAsyncErrors_js_1.catchAsyncErrors)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.cookies;
    if (!token) {
        return next(new error_1.default("User not Authenticated!", 400));
    }
    const decoded = jsonwebtoken_1.default.verify(token, index_js_1.default.secret);
    req.user = (yield userSchema_js_1.User.findById(decoded));
    next();
}));

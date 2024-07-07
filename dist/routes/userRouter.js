"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_js_1 = require("../controller/userController.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = express_1.default.Router();
router.post("/register", userController_js_1.register);
router.post("/login", userController_js_1.login);
router.get("/me", auth_js_1.isAuthenticated, userController_js_1.getUser);
router.get("/logout", auth_js_1.isAuthenticated, userController_js_1.logout);
router.get("/portfolio/me", userController_js_1.getUserForPortfolio);
router.put("/password/update", auth_js_1.isAuthenticated, userController_js_1.updatePassword);
router.put("/me/profile/update", auth_js_1.isAuthenticated, userController_js_1.updateProfile);
router.post("/password/forgot", userController_js_1.forgotPassword);
router.put("/password/reset/:token", userController_js_1.resetPassword);
exports.default = router;

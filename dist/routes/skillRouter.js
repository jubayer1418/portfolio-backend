"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const skillController_js_1 = require("../controller/skillController.js");
const auth_js_1 = require("../middlewares/auth.js");
const router = express_1.default.Router();
router.post("/add", auth_js_1.isAuthenticated, skillController_js_1.addNewSkill);
router.delete("/delete/:id", auth_js_1.isAuthenticated, skillController_js_1.deleteSkill);
router.put("/update/:id", auth_js_1.isAuthenticated, skillController_js_1.updateSkill);
router.get("/getall", skillController_js_1.getAllSkills);
exports.default = router;

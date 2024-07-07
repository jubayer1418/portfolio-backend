import express from "express";
import { addNewApplication, deleteApplication, getAllApplications } from "../controller/softwareApplicationController";
import { isAuthenticated } from "../middlewares/auth";
const router = express.Router();
router.post("/add", isAuthenticated, addNewApplication);
router.delete("/delete/:id", isAuthenticated, deleteApplication);
router.get("/getall", getAllApplications);
export default router;

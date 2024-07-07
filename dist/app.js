import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import config from "./app/config";
import userRouter from "./app/routes/userRouter";
import timelineRouter from "./app/routes/timelineRouter";
import messageRouter from "./app/routes/messageRouter";
import skillRouter from "./app/routes/skillRouter";
import { errorMiddleware } from "./app/middlewares/error";
import projectRouter from "./app/routes/projectRouter";
import softwareApplicationRouter from "./app/routes/softwareApplicationRouter";
const app = express();
app.use(cors({
    origin: [config.PORTFOLIO_URL, config.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/timeline", timelineRouter);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/softwareapplication", softwareApplicationRouter);
app.use("/api/v1/project", projectRouter);
app.use("/", (req, res) => {
    res.send("dashboard");
});
app.use(errorMiddleware);
export default app;

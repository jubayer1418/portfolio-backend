import jwt from "jsonwebtoken";
import { User } from "../models/userSchema";
import { catchAsyncErrors } from "./catchAsyncErrors";
import ErrorHandler from "./error";
import config from "../config";
export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("User not Authenticated!", 400));
    }
    const decoded = jwt.verify(token, config.secret);
    req.user = (await User.findById(decoded));
    next();
});

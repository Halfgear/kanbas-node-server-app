import express from 'express';
import "dotenv/config";
import Hello from './Hello.js';
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.CONNECTION_STRINGl || "mongodb://127.0.0.1:27017/kanbas"


const app = express()
mongoose.connect(CONNECTION_STRING);
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    origin: process.env.FRONTEND_URL

}));

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);
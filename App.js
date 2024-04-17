import express from 'express';
import "dotenv/config";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import mongoose from "mongoose";
import QuizRoutes from './Quiz/routes.js';

const CONNECTION_STRING = "mongodb+srv://megalojoon:lostark@cluster0.ybd4ww0.mongodb.net/kanbas?retryWrites=true&w=majority&appName=Cluster0"

const app = express()
mongoose.connect(CONNECTION_STRING);
app.use(cors({
    credentials: true,
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
QuizRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);
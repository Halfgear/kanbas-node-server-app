import { get } from "mongoose";
import * as dao from "./dao.js";
let currentUser = null;

export default function QuizRoutes(app) {
    const getAllQuizzes = async (req, res) => {
        const quizzes = await dao.getAllQuizzes();
        res.json(quizzes);
    };
    app.get("/api/quizzes", getAllQuizzes);
    // app.get("/api/quizzes/:qid", getQuizById);
    // app.post("/api/quizzes", createQuiz);
    // app.put("/api/quizzes/:qid", updateQuiz);
    // app.delete("/api/quizzes/:qid", deleteQuiz);
    // app.get("/api/quizzes/:qid/questions", getQuestionsForQuiz);
}

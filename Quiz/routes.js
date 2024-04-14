import * as dao from "./dao.js";
import { get } from "mongoose";

export default function QuizRoutes(app) {
    const getQuizzesByCourseId = async (req, res) => {
        const quizzes = await dao.getQuizzesByCourseId(req.params.courseId);
        res.json(quizzes);
    };
    app.get("/api/:courseId/quizzes", getQuizzesByCourseId);
    // app.get("/api/quizzes/:qid", getQuizById);
    // app.post("/api/quizzes", createQuiz);
    // app.put("/api/quizzes/:qid", updateQuiz);
    // app.delete("/api/quizzes/:qid", deleteQuiz);
    // app.get("/api/quizzes/:qid/questions", getQuestionsForQuiz);
}

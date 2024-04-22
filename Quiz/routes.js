import * as dao from "./dao.js";
import { get } from "mongoose";

export default function QuizRoutes(app) {
    const getQuizzesByCourseId = async (req, res) => {
        const quizzes = await dao.getQuizzesByCourseId(req.params.courseId);
        res.json(quizzes);
    };
    app.get("/api/:courseId/quizzes", getQuizzesByCourseId);

    const getQuizById = async (req, res) => {
        const quizzes = await dao.getQuizById(req.params.qid);
        res.json(quizzes);
    };
    app.get("/api/quizzes/:qid", getQuizById);

    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };
    app.post("/api/quizzes", createQuiz);

    const updateQuiz = async (req, res) => {
        const { qid } = req.params;
        const status = await dao.updateQuiz(qid, req.body);
        res.json(status);
    };
    app.put("/api/quizzes/:qid", updateQuiz);

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.qid);
        res.json(status);
    };
    app.delete("/api/quizzes/:qid", deleteQuiz);

    // app.get("/api/quizzes/:qid/questions", getQuestionsForQuiz);
}

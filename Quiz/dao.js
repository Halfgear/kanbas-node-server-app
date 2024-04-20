import quizModel from "./model.js";

export const getAllQuizzes = () => quizModel.find();
export const getQuizzesByCourseId = (courseId) => quizModel.find({ courseId: courseId });
export const getQuizById = (qid) => quizModel.findOne({ _id: qid.toString() });
export const createQuiz = (quiz) => quizModel.create(quiz);;
export const updateQuiz = (quizId, quiz) => quizModel.replaceOne({ _id: quizId }, quiz);
export const deleteQuiz = (quizId) => quizModel.deleteOne({ _id: quizId });
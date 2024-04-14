import quizModel from "./model.js";

export const getAllQuizzes = () => quizModel.find();
export const getQuizzesByCourseId = (courseId) => quizModel.find({ courseId: courseId });
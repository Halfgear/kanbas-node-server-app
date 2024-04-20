import quizModel from "./model.js";

export const getAllQuizzes = () => quizModel.find();
export const getQuizzesByCourseId = (courseId) => quizModel.find({ courseId: courseId });
export const getQuizById = (qid) => quizModel.findOne({ _id: qid.toString() });
export const createQuiz = (quiz) => {quizModel.create(quiz);};
export const updateUser = (quizId, quiz) =>  quizModel.updateOne({ _id: quizId }, { $set: quiz });
export const deleteUser = (quizId) => quizModelodel.deleteOne({ _id: quizId });
import quizModel from "./model.js";

export const getAllQuizzes = () => quizModel.find();
export const getQuizzesByCourseId = (courseId) => quizModel.find({ courseId: courseId });
export const getQuizById = (qid) => quizModel.findOne({ _id: qid.toString() });
export const createQuiz = (quiz) => {
    delete quiz._id;
    quizModel.create(quiz);
};

export const updateQuiz = (quizId, quiz) => quizModel.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => quizModel.deleteOne({ _id: quizId });
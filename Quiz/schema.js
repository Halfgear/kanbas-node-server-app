import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    question_type: { type: Number, required: true },
    points: { type: Number, required: true },
    description: { type: String, required: true },
    answers: [Number],
    correct: [mongoose.Schema.Types.Mixed]
});

const quizSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    course: { type: String, required: true },
    name: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    totalPoints: { type: Number, required: true },
    questions: [questionSchema]
},
    { collection: 'quiz' });

export default quizSchema;
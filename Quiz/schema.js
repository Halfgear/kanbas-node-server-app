import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question_type: { type: Number, required: true },
    points: { type: Number, required: true },
    description: { type: String, required: true },
    answers: [mongoose.Schema.Types.Mixed],
    correct: [mongoose.Schema.Types.Mixed]
});

const quizSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    title: { type: String, required: true },
    description: String,
    quizType: { type: String, required: true },
    points: { type: Number, required: true },
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    published: Boolean,
    multipleAttempts: Boolean,
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    questions: [questionSchema]
},
    { collection: 'quiz' } // changed to 'quizzes' assuming it aligns with your collection naming
);

export default quizSchema;

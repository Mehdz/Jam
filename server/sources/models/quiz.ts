import { Schema, model, Document, Model } from 'mongoose';

interface IQuiz extends Document {
    question: string;
    answers: Array<string>;
    responses: Array<string>;
    difficulty: number;
    questionNb: number;
}

const quizSchema = new Schema<IQuiz>({
  question: {
    type: String,
    required: true,
    unique: true
  },
  answers : [{
    type: String,
    required: true,
  }],
  responses : [{
    type: String,
    required: true,
  }],
  difficulty : {
    type: Number,
    required: true,
  },
  questionNb : {
    type: Number,
    required: true,
  },
});

const QuizModel: Model<IQuiz> = model<IQuiz>('Quiz', quizSchema);

export {QuizModel, IQuiz, quizSchema};

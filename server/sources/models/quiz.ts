import { Schema, model, Document, Model } from 'mongoose';

interface IQuiz extends Document {
    question: string;
    answer: string;
    difficulty: number;
    type: number;
}

const quizSchema = new Schema<IQuiz>({
  question: {
    type: String,
    required: true,
    unique: true
  },
  answer : {
    type: String,
    required: true,
  },
  difficulty : {
    type: Number,
    required: true,
  },
  type : {
    type: Number,
    required: true,
  },
});

const QuizModel: Model<IQuiz> = model<IQuiz>('Quiz', quizSchema);

export {QuizModel, IQuiz, quizSchema};

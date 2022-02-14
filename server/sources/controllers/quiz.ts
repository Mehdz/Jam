import { Request, Response } from 'express';
import {IQuiz, QuizModel} from '../models/quiz';

export const getAllQuiz = async (req: Request, res: Response) => {
  try {
    const quiz: Array<IQuiz> = await QuizModel.find({});

    res.status(200).json({
      status: 'success',
      quiz
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getQuizByDifficulty = async (req: Request, res: Response) => {
  const {difficulty} = req.params;

  try {
    const quiz: Array<IQuiz> = await QuizModel.find({difficulty: difficulty});

    res.status(200).json({
      status: 'success',
      quiz
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addQuiz = async (req: Request, res: Response) => {
  const {question, answers, responses, difficulty} = req.body;

  try {
    const quiz = await QuizModel.create({
      question: question,
      answers: answers,
      responses: responses,
      difficulty: difficulty,
    });

    res.status(200).json({
      status: 'success',
      quiz
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

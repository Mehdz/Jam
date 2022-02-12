import { Request, Response } from 'express';
import {IQuiz, QuizModel} from '../models/quiz';

export const getAllQuiz = async (req: Request, res: Response) => {
  try {
    const quiz: Array<IQuiz> = await QuizModel.find({});
    res.status(200).json({
      status: 'success',
      data: quiz
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getQuizByLevel = async (req: Request, res: Response) => {
  const {level} = req.params;

  try {
    const quiz: Array<IQuiz> = await QuizModel.find({level: level});
    res.status(200).json({
      status: 'success',
      data: quiz
    });
  } catch (error) {
    res.status(500).json(error);
  }
};


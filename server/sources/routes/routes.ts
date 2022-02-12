import express, {Router} from 'express';
import { getAllQuiz, getQuizByLevel } from '../controllers/quiz';

const router:Router = express.Router();

router.get('/api/quiz', getAllQuiz);
router.get('/api/quiz/level/', getQuizByLevel);


export {router};

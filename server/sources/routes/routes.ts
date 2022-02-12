import express, {Router} from 'express';
import { getAllQuiz, getQuizByDifficulty } from '../controllers/quiz';

const router:Router = express.Router();

router.get('/api/quiz', getAllQuiz);
router.get('/api/quiz/difficulty/', getQuizByDifficulty);

export {router};

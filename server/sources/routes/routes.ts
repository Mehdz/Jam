import express, {Router} from 'express';
import { addQuiz, getAllQuiz, getQuizByDifficulty } from '../controllers/quiz';

const router:Router = express.Router();

router.get('/api/quiz', getAllQuiz);
router.get('/api/quiz/:difficulty', getQuizByDifficulty);
router.post('/api/quiz/add/', addQuiz);

export {router};

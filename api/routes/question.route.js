import express from 'express';
import { addQuestion,  deleteQuestion,  editQuestion,  getQuestion, getRandomQuestion } from '../controllers/question.controller.js';

const router = express.Router();


router.get('/getQuestion', getQuestion);
router.post('/addQuestion', addQuestion);
router.delete('/deleteQuestion/:questionId',deleteQuestion);
router.get(`/getRandomQuestion`,getRandomQuestion)
router.put('/editQuestion/:questionId',editQuestion)

export default router; 
import express from 'express';
import { addQuestion,  deleteQuestion,  editQuestion,  getQuestion, getRandomQuestion } from '../controllers/question.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/getQuestion',verifyToken, getQuestion);
router.post('/addQuestion',verifyToken, addQuestion);
router.delete('/deleteQuestion/:questionId',verifyToken,deleteQuestion);
router.get(`/getRandomQuestion`,getRandomQuestion)
router.put('/editQuestion/:questionId',verifyToken, editQuestion)

export default router; 
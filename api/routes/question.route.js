import express from 'express';
import { addQuestion, getQuestion } from '../controllers/question.controller.js';

const router = express.Router();

router.get('/getQuestion', getQuestion);
router.post('/addQuestion', addQuestion);

export default router; 
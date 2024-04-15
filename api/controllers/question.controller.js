import { errorHandler } from '../utils/error.js';
import Question from '../models/question.model.js';

export const getQuestion = async (req, res, next) => {
    try {
        const questions = await Question.aggregate([
            { $sample: { size: 12 } }
        ]);
        res.status(200).json(questions);
    } catch (error) {
        next(error);
    }
};

export const addQuestion = async (req, res, next) => {
    try {
        const { text, options, correctOption } = req.body;
        const newQuestion = await Question.create({ text, options, correctOption });
        res.status(200).json(newQuestion);
    } catch (error) {
        next(error); 
    }
};

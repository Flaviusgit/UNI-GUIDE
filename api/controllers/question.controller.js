import { errorHandler } from '../utils/error.js';
import Question from '../models/question.model.js';


export const getQuestion = async (req, res, next) => {
    try {
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.sort === 'desc' ? -1 : 1;
        const questionId = req.query.questionId;

        const questions = await Question.find(
            req.query.questionId && { _id : req.query.questionId } 
        )
        .sort({ createdAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
        
        res.status(200).json({ questions: questions });
    } catch (error) {
        next(error);
    }
};


export const getRandomQuestion = async (req, res, next) => {
    try {
        const questions = await Question.aggregate([
            { $sample: { size: 12 } }
        ]);
        res.status(200).json({ questions: questions });
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

export const deleteQuestion = async (req, res, next) => {
   
    const { questionId } = req.params; 

    try {
        const deletedQuestion = await Question.findByIdAndDelete(questionId);

        if (!deletedQuestion) {
            return next(errorHandler(404, 'Nu s-a găsit întrebarea cu ID-ul specificat.'));
        }
    
        res.status(200).json(' Întrebarea a fost ștearsă cu succes.')
    } catch (error) {
       next(error);
    }
}
export const editQuestion = async (req, res, next) => {
   

    try {
        const editQuestion = await Question.findByIdAndUpdate(
            req.params.questionId, 
            {
                $set: {
                    text: req.body.text,
                    options: req.body.options,
                    correctOption: req.body.correctOption,
                },
            },
            { new: true } 
        );

        if (!editQuestion) {
            return next(errorHandler(404, 'Intrebarea nu a fost gasita'));
        }

        res.status(200).json(editQuestion);
    } catch (error) {
        next(error);
    }
};


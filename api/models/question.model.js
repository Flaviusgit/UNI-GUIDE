import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correctOption: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

export default Question;

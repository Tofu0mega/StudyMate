import mongoose from 'mongoose';

const OldQuestionSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Source: { type: String, required: true }, // URL or file path
    comments: [{ type: String }], // Array of comments
});

const OldQuestion = mongoose.model('OldQuestion', OldQuestionSchema);
export default OldQuestion;

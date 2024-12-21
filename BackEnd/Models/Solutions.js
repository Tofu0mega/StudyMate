import mongoose from 'mongoose';

const SolutionSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Source: { type: String, required: true }, // URL or file path
    comments: [{ type: String }], // Array of comments
});

const Solution = mongoose.model('Solution', SolutionSchema);
export default Solution;

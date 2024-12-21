import mongoose from 'mongoose';

const AssignmentSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Source: { type: String, required: true }, // URL or file path
    comments: [{ type: String }], // Array of comments
});

const Assignment = mongoose.model('Assignment', AssignmentSchema);
export default Assignment;

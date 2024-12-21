import mongoose from 'mongoose';

const SubjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String },
    Notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
    Assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }],
    Solutions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Solution' }],
    OldQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OldQuestion' }],
    VideoNotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VideoNote' }],
});

const Subject = mongoose.model('Subject', SubjectSchema);
export default Subject;

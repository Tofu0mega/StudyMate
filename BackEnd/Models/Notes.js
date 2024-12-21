import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    NoteTitle: { type: String, required: true },
    NoteSource: { type: String, required: true }, // URL or file path
    comments: [{ type: String }], // Array of comments
});

const Note = mongoose.model('Note', NoteSchema);
export default Note;

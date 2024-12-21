import mongoose from 'mongoose';

const VideoNoteSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Source: { type: String, required: true }, // URL or file path
    comments: [{ type: String }], // Array of comments
});

const VideoNote = mongoose.model('VideoNote', VideoNoteSchema);
export default VideoNote;

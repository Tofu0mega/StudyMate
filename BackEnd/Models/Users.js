import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    Username: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    ProfilePicture: { type: String },
    Institution: { type: String },
    Level: { type: String },
    IsFirstLogin: { type: Boolean },
    role: {
        type: String,
        enum: ['Student', 'Teacher'],
       
    },
    dob: { type: Date },
    gender: { type: String }, 
    dateOfJoining: { type: Date, default: Date.now } 
});

const User = mongoose.model('Users', UserSchema);
export default User;

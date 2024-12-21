import Subject from '../Models/Subjects.js';

// Create Subject Controller

import User from '../Models/Users.js'; // Import the User model
export const getSubjectById = async (req, res) => {
    try {
        const { id } = req.params;  // Extract the subject ID from the request parameters

        // Validate ID
        if (!id) {
            return res.status(400).json({ message: 'Subject ID is required.' });
        }

        // Find the subject by ID
        const subject = await Subject.findById(id);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found.' });
        }

        res.status(200).json({
            message: 'Subject retrieved successfully.',
            subject
        });
    } catch (error) {
        console.error('Error fetching subject:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
// Create Subject Controller
export const createSubject = async (req, res) => {
    try {
        const { name, code, userId } = req.body;
        console.log(1)

        // Validate inputs
        if (!name || !code || !userId) {
            return res.status(400).json({ message: 'Name, Code, and User ID are required.' });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Create new subject
        const subject = new Subject({ name, code });
        await subject.save();

        // Link subject to the user
        user.Subjects.push(subject._id);
        await user.save();

        res.status(201).json({ 
            message: 'Subject created successfully and linked to the user.', 
            subject 
        });
    } catch (error) {
        console.error('Error creating subject:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

export const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID
        if (!id) {
            return res.status(400).json({ message: 'Subject ID is required.' });
        }

        // Find the subject
        const subject = await Subject.findById(id);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found.' });
        }

        // Remove the subject reference from users
        await User.updateMany(
            { Subjects: id }, // Find users with the subject linked
            { $pull: { Subjects: id } } // Remove the subject from their Subjects array
        );

        // Delete the subject
        await Subject.findByIdAndDelete(id);

        res.status(200).json({ message: 'Subject deleted successfully and unlinked from users.' });
    } catch (error) {
        console.error('Error deleting subject:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
import cloudinary from 'cloudinary';
import { createCanvas } from 'canvas';



export async function uploadImage(banner) {
    try {
        const result = await cloudinary.v2.uploader.upload(banner, {
            folder: 'StudyMate/Images',
        });
       
        return result.secure_url;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to upload image');
    }
}


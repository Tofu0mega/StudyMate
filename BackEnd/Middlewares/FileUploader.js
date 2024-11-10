import cloudinary from 'cloudinary';



export async function uploadPDF(pdfFile) {
    try {
        const result = await cloudinary.v2.uploader.upload(pdfFile, {
            folder: 'StudyMate/PDFs',
            resource_type: 'raw',  // Important for non-image files like PDFs
           
        });
        return result.secure_url;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to upload PDF');
    }
}

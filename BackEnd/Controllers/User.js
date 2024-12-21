import User from "../Models/Users.js";
import {uploadImage} from "../Middlewares/ImageUploader.js"

export async function getuser(req, res) {
  
    const existingUser = await User.findById(req.params.userId ).lean();
  
    if (existingUser) {
        const {Password,...safedata}=existingUser
     
      res.status(200).json(safedata);
      
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  }


  export async function adddetails(req,res){
    try{
      const existingUser=await User.findById(req.params.userId)
      if(!existingUser){
        return res.status(404).json({message:"Something Went Wrong Pls Retry"})
      }else{
        const {DOB,Gender,Institute,Role,Level,ProfilePicture}=req.body
        if(ProfilePicture){

          const profilepicurl=await uploadImage(ProfilePicture)
          existingUser.ProfilePicture=profilepicurl
        }
        existingUser.dob=DOB
        existingUser.role=Role
        existingUser.Institution=Institute
        existingUser.IsFirstLogin=false
        existingUser.Level=Level
        existingUser.gender=Gender

        await existingUser.save()
        return res.status(200).json({message:"User Added Successfully"})


      }

    }catch(e){
      console.log(e)
    }
  }

  export const getUserSubjects = async (req, res) => {
    try {
        const { userId } = req.params;

        // Validate user ID
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required.' });
        }

        // Find the user and populate the Subjects array
        const user = await User.findById(userId).populate('Subjects');
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({ 
            message: 'User subjects retrieved successfully.', 
            subjects: user.Subjects 
        });
    } catch (error) {
        console.error('Error fetching user subjects:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
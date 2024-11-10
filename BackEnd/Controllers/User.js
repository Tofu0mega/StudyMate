import User from "../Models/Users.js";
import {uploadImage} from "../Middlewares/ImageUploader.js"

export async function getuser(req, res) {
  console.log(1)
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
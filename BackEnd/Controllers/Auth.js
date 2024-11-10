import User from "../Models/Users.js";


import dotenv from 'dotenv';

import bcrypt from "bcrypt";

import jwt from 'jsonwebtoken'

export  async function Signup(req,res){
    const { Email, Password,UserName } = req.body;
   
    try {
        //Checking if the user already exists
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //Salt
        const salt = await bcrypt.genSalt();

        //Hashing the Password
        const hashedPassword = await bcrypt.hash(Password, salt);

        //Creating the user in the database
        const newUser = await User.create({  Username: UserName,Email:Email, Password: hashedPassword,IsFirstLogin: true ,ProfilePicture:"https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"});

        //Generating a JWT token
        const token = jwt.sign({ Email: newUser.Email, id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });

        res.status(201).json({ _id:newUser._id, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    
}

export  async function Signin(req,res){
    const { Email, Password } = req.body;
   
    try {
        //Checking if the user already exists
        const existingUser = await User.findOne({ Email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User dosent exists' });
        }

        const Passwordbool=await bcrypt.compare(Password,existingUser.Password)
        if(!Passwordbool){
            return res.status(400).json({message:`Invalid Credentials`})
        }
       

       
        

        //Generating a JWT token
        const token = jwt.sign({ Email: existingUser.Email, id: existingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });

        return res
        .status(200)
        .json({ message: "Successfully Logged In", _id: existingUser._id, token });

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
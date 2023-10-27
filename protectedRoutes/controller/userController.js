const mongoose = require('mongoose');
const userModel = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signUp = async(req, res) =>{

   
    // Hash Password
    // Create User
    // Generate Token

    const reqData = req.body;
    console.log(reqData);
    try{

         // Check Existing User
         const existingUser = await userModel.findOne({ email: reqData.email});
         
         if(existingUser){
           return res.status(400).json({message: 'user already exists'});
         };
         const hashPassword = await bcrypt.hash(reqData.password, 10);

         const result = await userModel.create({
            name: reqData.name,
            email: reqData.email,
            username: reqData.username,
            password: hashPassword
         })

         const token =  jwt.sign({
            email: result.email,
            userId: result._id
         },process.env.SECRET_KEY)

         return res.status(201).json({
            user: result,
            token: token
         });
         

        


    }
    catch(error){
        console.log(`Error User Create : ${error.message}`);
    }
    
}



const getAllUsers = async(req, res) =>{
    res.send("get all users");
}

const signIn = async(req, res) =>{
    const reqData = req.body;
    try{

        const existingUser = await userModel.findOne({ email: reqData.email });

        if(!existingUser){
            return res.status(400).json({message:"invalid credentials"});
        }
        
        const matchPassword = await bcrypt.compare(reqData.password,existingUser.password);

        const token = jwt.sign({email: existingUser.email, userId: existingUser._id}, process.env.SECRET_KEY)
        
        if(!matchPassword){
            return res.status(400).json({message:"invalid credentials"});
        }

        res.status(200).json({user:existingUser, token: token})
    }
    catch(error){
        console.log(`Error Sign In : ${error.message}`)
        res.status(500).json({message:"Something is wrong"})
    }
}

module.exports = {signUp,getAllUsers, signIn}
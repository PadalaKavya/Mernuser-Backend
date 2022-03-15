import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
//also require connection with db
import  User from '../model/userSchema.js';
router.get('/',(req,res)=>{
    res.send('This is home page 1');
});

router.post('/register',async(req,res)=>{
    const {name,email,gender,age,password} = req.body;
    if(!name || !email|| !gender ||!age||!password){
        return res.status(422).json({error: "please fill the details"});
    }

    try{
        const userExist= await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error: "email exist"});
        }
        const user = new User({name,email,gender,age,password});
        await user.save();
        res.status(201).json({message: "registered succussfully"});
        
    }catch(err) {
        console.log(err);
    }

});

//-----------------------------Login Route------------------
router.post('/signin',async(req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"please fill data"})
        }

        const userLogin = await User.findOne({email:email});
        console.log(userLogin);
        //promises must be handled
        if(!userLogin){
            res.status(400).json({error:"user  error login "});
        }else{
            res.json({message:"user login successfully"});
        }
    }catch (err) {
        console.log(err); 
    }
});

export default router;
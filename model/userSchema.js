import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {mongo1,mongo2} from '../mongo.js';

const sourceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilepic:{
        type:String,
    },
    timestamp:{
        type:Date,
        default:Date.now(),
        expires: 90
      },
    tokens : [
        {
        token : {
            type:String,
            required:true
        }
        }
    ]
})
sourceSchema.index({ "timestamp": 1 }, { expireAfterSeconds: 200 });
sourceSchema.method("generateAuthToken", async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
});

const destinationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilepic:{
        type:String,
    },
    tokens : [
        {
        token : {
            type:String,
            required:true
        }
        }
    ]
});
sourceSchema.method("generateAuthToken", async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
})


const collection1 = mongo1.model('collection1', sourceSchema);
const collection2 = mongo2.model('collection2',destinationSchema);

export {collection1,collection2};
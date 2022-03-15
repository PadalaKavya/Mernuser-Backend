import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userrouter from './router/auth.js';
//--------------------- connecting to database---------------------------------------------
async function initServer(){
    const app = express()
    app.use(express.json());
    app.use(cors({
      origin: 'http://localhost:3000/'
  }))
    app.use('/', userrouter);
    dotenv.config();
    const PORT = process.env.PORT || 5000;
    try{
      await mongoose.connect(process.env.ATLAS_URI);
      console.log('connected to the mongodb at port {$PORT}')
  
    }catch(error){
      console.log(error);
    }
    const Middleware = (req,res,next)=>{
        next();
    }  
    app.get('/signup',(req,res)=>{
        res.send('This is signup page');
    });
    app.get('/login',(req,res)=>{
        res.send('This is login page');
    });
    app.listen(PORT,()=>
    console.log(`express server is running on the  port ${PORT}`))
  }

initServer()

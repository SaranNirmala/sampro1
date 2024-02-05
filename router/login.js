import Express from "express";
import { userModel } from "../db/model.js";
import {v4} from 'uuid'

export const LoginRouter = Express.Router()

 LoginRouter.get('/', (req,res) => {
    res.send("Let's Do it....")
 });


 LoginRouter.post('/', async(req,res) => {
    const payload = req.body;
    try{
     const data= await userModel.findOne({email: payload.email});
     if(data){
        console.log(data);
        res.status(200).send("Already logged in");

     } else{
       const data=await userModel.create({...payload, id:v4()})
       console.log(data);
       res.send(data);
     }

    } catch(err){
        console.log(err);
        res.status(500).send("server error: ")
    }
 });
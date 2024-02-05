import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    id:{
        type:'string'
    },
    name:{
        type:'string',
        
    },
    email:{
        type:'string' ,
        required:true
    },
    password:{
        type:'string'
    }
})

export const userModel=mongoose.model('users', userSchema);

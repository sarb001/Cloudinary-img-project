import mongoose , { Schema } from 'mongoose';

const schema =  new mongoose.Schema({

    name : {
        type:String,
        required : [true , "Please ENter your name"],
    },
    email : {
        type:String,
        required : [true , "Please ENter your email"],
        unique :true,
    },
    avatar: {
        public_id :{
            type : String,
            required : true
        },
         url :{
            type : String,
            required : true
        }
    },
})

export const user = mongoose.model('User',schema);
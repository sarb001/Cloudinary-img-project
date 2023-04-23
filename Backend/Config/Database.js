
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
    path : './Config/config.env',
});


const MONGO_URI='mongodb+srv://admin:admin@cluster0.3phzl66.mongodb.net/postimage?retryWrites=true&w=majority'

export const connectDB = async() => {
        try{
            const  { connection }  = await mongoose.connect(MONGO_URI);
            console.log('url is --',MONGO_URI);
            console.log(`Mongoose Connected With +++++`);
        }catch(err){
            console.log('MongoDB Error Hereee',err);
        }
}
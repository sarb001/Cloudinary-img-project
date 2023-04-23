

import  dotenv from 'dotenv';
import  express from 'express';
import  cloudinary  from './Cloudinary.js';
import   user   from './Routes/UserRoutes.js';
import { connectDB } from './Config/Database.js';
import  bodyparser from 'body-parser';

dotenv.config({
    path : './Config/config.env',
});

const port = process.env.PORT
const app = express();


app.use(express.json({ limit : '50mb' }));
app.use(express.urlencoded({ limit : '50mb' ,extended : true }));

connectDB();

cloudinary.v2.config({
    cloud_name    :  'damnzg3hr',
    api_key       :  '732182288781798',
    api_secret    :  'sVF1ROBodZsjYaOkFpirRRPgMLg',
})

app.use('/api/upload',user)

// app.post('/api/upload' , async(req,res) => {

//         try{

             

//                 // const fileStr = req.body.data;
//                 // console.log('fileStrrrr is --',fileStr);
//                 // const uploadres = await cloudinary.uploader.upload(fileStr,{
//                 //     upload_preset: 'folder_one'
//                 // })
//                 // res.json({mesaage : " File Uploaded Here "})
//                 // console.log(' uploares -- '      ,uploadres);
//                 // console.log(' url is -- '        ,uploadres.url);
//                 // console.log(' secure url  -- '   ,uploadres.secure_url);
//                 // console.log(' public id is  -- ' ,uploadres.public_id);
            
//             }catch(error){
//                 console.log('error here isss- -',error);
//             }
// })
   

app.listen(port,() => {
    console.log(`Listening on PORT ${port} bROOO`);
})

export default app 
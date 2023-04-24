
import { user } from "../Models/user.js";
import cloudinary from 'cloudinary';
import getDataUri from "../getDataUri.js";

export const postimg = async(req,res,next) => {
    
    try{
              const {name,email} = req.body;
              const  file = req.file;
              console.log(' Dataaa NN is --',name,email,file);

             if(!name || !email || !file){
                return res.json({message : " Please FiLL All FielDDS "});
             }

             let userone = await user.findOne({ email });
             if (userone) return res.json({message : 'User Already EXisted '})

             const fileUri = getDataUri(file);
             console.log('file URI isss --',fileUri);

             const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
             console.log('my cloud is --',mycloud);

             console.log('my url --',mycloud.url);

             try{
             const usercreate = await user.create({
                    name,
                    email,
                    avatar: {
                        public_id :mycloud.public_id,
                        url : mycloud.secure_url,
                    }
                 })
              res.json({message : " Created Acocunt  "})
    
             }catch(error){
                console.log('error is',error);
                res.json({error : '  Eoror ooo  '})
             }
             

                // const fileStr = req.body.data;
                // console.log('fileStrrrr is --',fileStr);
                // const uploadres = await cloudinary.uploader.upload(fileStr,{
                //     upload_preset: 'dev_setups'
                // })
                // res.json({mesaage : " File Uploaded Here "})
                // console.log(' uploares -- '      ,uploadres);
                // console.log(' url is -- '        ,uploadres.url);
                // console.log(' secure url  -- '   ,uploadres.secure_url);
                // console.log(' public id is  -- ' ,uploadres.public_id);
       
    }catch(error){
        console.log('error here isss- -',error);
    }
}
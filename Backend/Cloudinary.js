import {config} from 'dotenv';
// require('dotenv').config();
// const cloudinary = require('cloudinary').v2;
import cloudinary  from 'cloudinary';

cloudinary.v2.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
});

export default cloudinary;

// module.exports = { cloudinary };
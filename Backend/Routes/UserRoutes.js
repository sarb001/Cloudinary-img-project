import express from 'express';
import { postimg } from '../Controller/UserController.js';
import singleupload from '../multer.js';

const router = express.Router();

router.route('/img').post(singleupload,postimg)


export default router;
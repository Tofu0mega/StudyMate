import { Router } from 'express';


import * as users from '../Controllers/User.js';

import dotenv from 'dotenv';


dotenv.config();

const router = Router();

router.get(`/:userId`,users.getuser)
router.post(`/adddetails/:userId`,users.adddetails)
router.get("/getSubject/:userId",users.getUserSubjects)
export default router;
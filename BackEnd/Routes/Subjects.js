import { Router } from 'express';


import * as subjects from '../Controllers/Subjects.js';

import dotenv from 'dotenv';


dotenv.config();

const router = Router();

router.get(`/:id`,subjects.getSubjectById)
router.post(`/addSubject`,subjects.createSubject)
router.post("/deleteSubject/:id",subjects.deleteSubject)
export default router;
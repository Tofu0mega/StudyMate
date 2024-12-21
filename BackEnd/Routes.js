import { Router } from "express";
import auth from "./Routes/Auth.js"
import users from "./Routes/Users.js"
import subject from "./Routes/Subjects.js"

const router =Router()


router.use('/auth', auth);
router.use('/users', users);
router.use('/subject', subject);

export default router
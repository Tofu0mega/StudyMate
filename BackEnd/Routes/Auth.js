import {Router} from 'express'
import * as auth from "../Controllers/Auth.js"


const router=Router();

router.post('/signin', auth.Signin);
router.post('/signup', auth.Signup);


export default router;
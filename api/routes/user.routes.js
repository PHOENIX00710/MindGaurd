import express from 'express'
import { signin, signout, signup } from '../controllers/user.controller.js'

const router = express.Router()

router.post("/signin",signin)
router.post("/signup",signup)
router.get("/signout",signout)

export default router
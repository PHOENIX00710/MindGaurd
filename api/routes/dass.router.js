import express from 'express'
import { dassHanlder } from '../controllers/dass.controller.js'

const router=express.Router()

router.post("/submitDASS",dassHanlder)

export default router
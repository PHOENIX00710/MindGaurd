import express from 'express'
//import { anxietyHandler, depressionHandler } from '../controllers/article.controllers.js'

const router = express.Router()
router.get("/depression", depressionHandler)
router.get("/anxiety", anxietyHandler)

export default router
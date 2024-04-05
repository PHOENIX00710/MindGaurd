import express from 'express'
import { veryWellMindScraper } from '../scrapers/veryWellMind.js'
import { psychCentralScraper } from '../scrapers/psychCentralScraper.js'
import { getAllArticles } from '../controllers/article.controllers.js'

const router = express.Router()
router.post("/veryWellMind", veryWellMindScraper)
router.post("/psychCentral", psychCentralScraper)
router.get("/getArticles",getAllArticles)

export default router
import puppeteer from "puppeteer";
import articleModel from "../models/articleSchema.js";

export const psychCentralScraper = async (req, res) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const types = ['depression', 'anxiety'];

    for (let category of types) {
        console.log(category);
        await page.goto(`https://psychcentral.com/${category}`);
        await page.waitForSelector('.css-10vopkp', { visible: true });
        try {
            let articles = await page.evaluate((category) => {
                return Array.from(document.querySelectorAll('.css-8sm3l3'), e => {
                    const title = e.querySelector('.css-1i8xvi9')?.textContent || 'No title';
                    const content = e.querySelector('.css-onvglr')?.textContent || 'No content';
                    const link = e.querySelector('.css-1i8xvi9')?.href || 'No link';
                    const img = e.querySelector('.css-10vopkp')?.src || 'https://media.gettyimages.com/id/632495542/photo/las-vegas-nv-adult-film-actress-lana-rhoades-attends-the-2017-adult-video-news-awards-at-the.jpg?s=612x612&w=gi&k=20&c=j9toULaCbKoc92QIfrZ2tyOfuxgzVAXoChceawOMWN0=';
                    return { title, content, link, img, category };
                });
            }, category); // Note: Passing category as an argument to page.evaluate()
            articles = articles.filter(a => a.content != 'No content' || a.title != 'No title');
            for (let article of articles) {
                try {
                    const newArticle = new articleModel({
                        title: article.title.trim(),
                        overview: article.content.trim(),
                        link: article.link,
                        image: article.img,
                        category: article.category
                    })
                    await newArticle.save()
                    console.log(`Entry for ${article.title} added successfully`);
                }
                catch (error) {
                    console.log(error)
                    res.json(error).status(500)
                }
            }
        } catch (error) {
            console.log(error);
            res.json(error).status(500)
        }
    }

    await browser.close();
    res.json({
        success: true,
        message: "Articles added"
    })
};

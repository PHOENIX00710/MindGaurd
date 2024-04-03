import puppeteer from "puppeteer";

export const veryWellMindScraper = async (req, res) => {
    const browser = await puppeteer.launch({ headless: true });

    const categories = ['anxiety-7508391', 'depression-4157261'];
    for (let category of categories) {
        const page = await browser.newPage(); // Ensure a new page is created for each category.
        await page.goto(`https://www.verywellmind.com/${category}`);
        try {
            let articles = await page.evaluate((category) => {
                return Array.from(document.querySelectorAll('.mntl-card-list-items'), e => {
                    const title = e.querySelector('.card__byline')?.getAttribute('data-byline') || 'No title';
                    const content = e.querySelector('.card__title-text')?.textContent || 'No content';
                    const link = e?.href || 'No link'; // Ensure you're selecting an anchor element for the link.
                    const img = e.querySelector('.card__img')?.getAttribute('data-src') || 'https://media.gettyimages.com/id/632495542/photo/las-vegas-nv-adult-film-actress-lana-rhoades-attends-the-2017-adult-video-news-awards-at-the.jpg?s=612x612&w=gi&k=20&c=j9toULaCbKoc92QIfrZ2tyOfuxgzVAXoChceawOMWN0=';
                    const categoryName = category.split('-')[0]; // Use a different variable name if needed.
                    return { title, content, link, img, category: categoryName };
                });
            }, category); // Pass the category variable correctly.
            console.log(articles);
            await page.close(); // Close the page after each iteration.
        }
        catch (e) {
            console.log(e);
        }
    }
    await browser.close(); // Close the browser after processing all categories.
};


veryWellMindScraper()
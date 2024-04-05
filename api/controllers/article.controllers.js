import articleModel from "../models/articleSchema.js"

export const getAllArticles = async (req, res, next) => {
    const start = parseInt(req.query.start) || 0; // Ensure 'start' is an integer
    const limit = parseInt(req.query.limit) || 12; // Ensure 'limit' is an integer
    const sortDirection = req.query.sortBy === "asc" ? 1 : -1; // Convert to MongoDB sort format

    // Starting with an empty match stage to apply conditional filtering
    let matchStage = {};

    if (req.query.category) {
        matchStage.category = req.query.category;
    }

    if (req.query.searchTerm) {
        matchStage.$or = [
            { title: { $regex: req.query.searchTerm, $options: "si" } },
            { overview: { $regex: req.query.searchTerm, $options: "si" } }
        ];
    }

    try {
        const articles = await articleModel.aggregate([
            { $match: matchStage },
            { $sample: { size: limit + start } }, // Increase sample size to account for skip
            { $sort: { updatedAt: sortDirection } },
        ]).then(result => result.slice(start, start + limit)); // Manually apply 'skip' logic

        res.json({
            success: true,
            count: articles.length,
            data: articles
        });
    } catch (error) {
        res.json({
            success: false,
            message: error
        });
    }
}

import Url from "../models/user.models.js";

// CREATE SHORT URL
export const createShortUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;

        // basic validation
        if (!originalUrl) {
            return res.status(400).json({ message: "Original URL is required" });
        }

        // generate short code
        const shortCode = Math.random().toString(36).substring(2, 8);

        // save in database
        const newUrl = await Url.create({
            originalUrl,
            shortCode,
            numberOfClicks: 0
        });

        // return short url
        res.json({
            shortUrl: `http://localhost:${process.env.PORT}/${shortCode}`,
            data: newUrl
        });

    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};


// REDIRECT URL
export const redirectUrl = async (req, res) => {
    try {
        const { shortCode } = req.params;

        const urlData = await Url.findOne({ shortCode });

        if (!urlData) {
            return res.status(404).json({ message: "URL not found" });
        }

        // increase click count
        urlData.numberOfClicks += 1;
        await urlData.save();

        // redirect user
        res.redirect(urlData.originalUrl);

    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};
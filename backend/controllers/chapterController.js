const Chapter = require('../models/chapterModel');

// Create a new chapter
exports.createChapter = async (req, res) => {
    try {
        const chapterId = await Chapter.createChapter({
            title: req.body.title,
            description: req.body.description,
            video_link: req.body.video_link,
            external_link: req.body.external_link || '',
            chapter_no: req.body.chapter_no, 
            journey_id: req.params.journeyId 
        });
        res.status(201).json({ id: chapterId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
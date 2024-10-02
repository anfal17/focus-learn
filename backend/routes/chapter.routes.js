const express = require('express');
const router = express.Router();
// const chapterController = require('../controllers/chapterController');

const authenticateToken = require('../controllers/auth');
const { createChapter, getChaptersByJourneyId, updateChapterCompleted, deleteChapter, updateChapter } = require('../controllers/chapterController');

// Define routes for chapters
router.post('/:journeyId/chapters', authenticateToken, createChapter);
router.get('/:journeyId/chapters', authenticateToken, getChaptersByJourneyId);
router.get('/chapters/:id', authenticateToken, getChaptersByJourneyId);
router.put('/chapters/:id', authenticateToken, updateChapter);
router.put('/chapters/isComplete/:id', authenticateToken, updateChapterCompleted);
router.delete('/chapters/:id', authenticateToken, deleteChapter);

module.exports = router;
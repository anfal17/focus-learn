const db = require('../dbConnec')

//things to do

//createChapter
//getChapterbyId --> to find details of each chapter
//getChapter
//updateCahpter
//updateCahpterComplete
//deleteChapter

async function createChapter(data) {
    const { title, description, video_link, chapter_no, journey_id } = data; // Destructure data
    const result = await db.query(
        'INSERT INTO chapters (title, description, video_link, chapter_no, journey_id) VALUES (?, ?, ?, ?, ?)',
        [title, description, video_link, chapter_no, journey_id]
    );
    return result.insertId; // Return the ID of the newly created chapter
}

// Get chapters by journey ID
async function getChaptersByJourneyId(journeyId) {
    const result = await db.query(
        'SELECT * FROM chapters WHERE journey_id = ? ORDER BY chapter_no',
        [journeyId]
    );
    return result; // Return an array of chapters for the journey
}

// Get a chapter by ID
async function getChapterById(id) {
    const result = await db.query(
        'SELECT * FROM chapters WHERE id = ?',
        [id]
    );
    return result[0]; // Return the chapter object if found
}

// Update a chapter by ID
async function updateChapter(id, data) {
    const { title, description, video_link, chapter_no } = data; // Destructure data
    const result = await db.query(
        'UPDATE chapters SET title = ?, description = ?, video_link = ?, chapter_no = ? WHERE id = ?',
        [title, description, video_link, chapter_no, id]
    );
    return result.affectedRows > 0; // Return true if the update was successful
}

//only return  if upate successfull

async function updateChapterComplete(id, data) {
    const { is_completed } = data; // Destructure data
    const result = await db.query(
        'UPDATE chapters SET is_completed = ? WHERE id = ?',
        [is_completed, id]
    );
    return result.affectedRows > 0; // Return true if the update was successful
}

// Delete a chapter by ID
async function deleteChapter(id) {
    const result = await db.query(
        'DELETE FROM chapters WHERE id = ?',
        [id]
    );
    return result.affectedRows > 0; // Return true if the deletion was successful
}

module.exports = {
    createChapter,
    getChaptersByJourneyId,
    getChapterById,
    updateChapter,
    updateChapterComplete,
    deleteChapter,
};

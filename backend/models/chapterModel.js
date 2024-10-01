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


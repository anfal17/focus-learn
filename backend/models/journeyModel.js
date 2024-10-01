const db = require('../database'); // Import database connection

// Create a new journey
async function createJourney(data) {
    const { title, description, is_public, user_id } = data; // Destructure data
    const result = await db.query(
        'INSERT INTO journeys (title, description, is_public, user_id) VALUES (?, ?, ?, ?)',
        [title, description, is_public, user_id]
    );
    return result.insertId; // Return the ID of the newly created journey
}
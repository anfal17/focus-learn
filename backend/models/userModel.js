const db = require('../database'); // Import database connection


// Create a new user
async function createUser(data) {
    const { username, email, password } = data; // Destructure data
    const result = await db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password]
    );
    return result.insertId; // Return the ID of the newly created user
}

// Find a user by email -- used in login
async function findUserByEmail(email) {
    const result = await db.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );
    return result[0]; // Return the first matching user
}

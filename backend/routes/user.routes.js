const express = require("express");

const authenticateToken = require("../controllers/auth");
const router = express.Router();

const userController = require('../controllers/userController');

// all user routes
//delete to be include in future updates

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getUsers);
router.get('/profile', authenticateToken, userController.getUserProfile);

module.exports = router;

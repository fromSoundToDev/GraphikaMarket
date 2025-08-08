import express from 'express';
const router = express.Router();
const auth = require('../controllers/authControllers');

router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/logout', auth.logout);

module.exports = router;

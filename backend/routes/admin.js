import express from 'express';
const router = express.Router();
const {protect, authorize} = require('../middleware/auth');
const adminControl = require('../controllers/adminControllers');

router.get('/stats', protect, authorize('admin'), adminControl.stats);

module.exports = router;

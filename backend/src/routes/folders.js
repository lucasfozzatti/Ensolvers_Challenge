const express = require('express');
const router = express.Router();
const pool = require('../database');
const authController = require('../controllers/folders')


router.get('/folders/:id', authController.getFolder)

router.post('/save_folder', authController.saveFolder)

router.delete('/delete_folder/:id', authController.deleteFolder)



module.exports = router;
const express = require('express');
const router = express.Router();
const pool = require('../database');
const authController = require('../controllers/tasks')


router.get('/tasks/:id', authController.tasks)
router.post('/save_tasks', authController.saveTasks)
router.delete('/delete_tasks/:id', authController.deleteTasks)
router.put('/update_task',authController.updateTasks)
router.put('/update_checkbox', authController.updateCheckbox)
router.delete('/delete_foldertask/:id', authController.deleteFoldertask)

module.exports = router;
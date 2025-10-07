const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController'); 

router.get('/', taskController.showTasks);
router.get('/create', taskController.createTask);
router.post('/create', taskController.saveTask);
router.get('/edit/:id', taskController.editTask);
router.post('/edit', taskController.updateTask);
router.post('/delete', taskController.deleteTask);

module.exports = router;
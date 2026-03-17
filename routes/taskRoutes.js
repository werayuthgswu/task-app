const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.index);
router.post('/tasks', taskController.create);
router.post('/tasks/delete/:id', taskController.delete);

module.exports = router;

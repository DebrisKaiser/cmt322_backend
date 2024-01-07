const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.route('/')
    .get(checkTaskAccess, getAllTasks)
    .post(checkTaskAccess, createTask);

router.route('/:id')
    .get(checkTaskAccess, getTask)
    .patch(checkTaskAccess, updateTask)
    .delete(checkTaskAccess, deleteTask);

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
const express = require('express');
const router = express.Router();

const controller = require('../controllers/eventController')

router.get('/', controller.getAllEvents) 
router.get('/:idEvent', controller.getEvent)
router.post('/user/promoter/creat', controller.postAddEvent)
router.put('/user/promoter/:id/update', controller.updateEvent)
router.delete('/user/promoter/:id/delete', controller.deleteEvent)

module.exports = router
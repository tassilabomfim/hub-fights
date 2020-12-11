const express = require('express');
const router = express.Router();

const controller = require('../controllers/fighterController')

router.get('/', controller.getAllFighters) 
router.get('/:id', controller.getFighter)
router.post('/creat', controller.postAddFighter)
router.put('/:id/update', controller.updateFighter)
router.delete('/:id', controller.deleteFighter)
// router.post('/event/:id/post', controller.postFighterEvent)



module.exports = router
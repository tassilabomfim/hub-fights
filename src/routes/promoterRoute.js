const express = require('express');
const router = express.Router();

const controller = require('../controllers/promoterController')

router.get('/', controller.getAllPromoters) 
router.get('/:id', controller.getPromoter)
router.post('/creat', controller.postAddPromoter)
router.put('/:id/update', controller.updatePromoter)
router.delete('/:id', controller.deletePromoter)

// router.post('/fighter/:id/conect', controller.postPromoterFighter)


module.exports = router
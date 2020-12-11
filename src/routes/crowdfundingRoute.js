const express = require('express');
const router = express.Router();

const controller = require('../controllers/crowdfundingController')

router.get('/', controller.getAllCrowdfundings); 
router.get('/:id', controller.getCrowdfunding);
router.post('/user/fighter/:id/creat', controller.postAddCrowdfunding);
router.put('/user/fighter/:id/update,', controller.updateCrowdfunding);
router.delete('/user/fighter/:id/delete', controller.deleteCrowdfunding)




module.exports = router
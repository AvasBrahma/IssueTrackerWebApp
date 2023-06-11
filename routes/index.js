const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');

router.get('/', homeController.home);
router.use('/projects', require('./projects'));

router.get('/issue', homeController.renderAllIssue);

module.exports=router;
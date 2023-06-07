const express=require('express');
const router=express.Router();
const projectController=require('../controller/project_controller');

router.get('/create', projectController.createProject);
router.post('/add', projectController.addProject);

module.exports=router;
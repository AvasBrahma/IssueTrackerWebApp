const express=require('express');
const router=express.Router();
const projectController=require('../controller/project_controller');

router.get('/create', projectController.createProject);
router.post('/add', projectController.addProject);

router.get('/view/:id', projectController.viewProject);
router.get('/edit/:id', projectController.editProject);
router.put('/edit/:id', projectController.editUpdateProject);

router.delete('/edit/:id', projectController.deleteProject);

router.get('/issue', projectController.viewProjectIssue);
module.exports=router;
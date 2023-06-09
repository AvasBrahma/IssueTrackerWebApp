const express=require('express');
const router=express.Router();
const projectController=require('../controller/project_controller');
const issueController=require('../controller/issue_controller');

router.get('/create', projectController.createProject);
router.post('/add', projectController.addProject);

router.get('/view/:id', projectController.viewProject);
router.get('/edit/:id', projectController.editProject);
router.put('/edit/:id', projectController.editUpdateProject);

router.delete('/edit/:id', projectController.deleteProject);

router.get('/issue', issueController.viewProjectIssue);
router.get('/creatIssuePage', issueController.viewCreateIssue);
router.post('/addIssue', issueController.addIssue);
module.exports=router;
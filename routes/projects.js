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

router.get('/issue/:id', issueController.viewProjectIssue);
router.get('/createIssuePage/:id', issueController.viewCreateIssue);
router.post('/addIssue', issueController.addIssue);

router.get('/issue/edit/:id', issueController.viewEdit);

module.exports=router;
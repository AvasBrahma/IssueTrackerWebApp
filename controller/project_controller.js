const Project=require('../model/projectsModel');
const mongoose=require('mongoose');

module.exports.createProject= async (req, res)=>{
   
    res.render('projects/createProject');
}

//post projects in DB
module.exports.addProject=async(req, res)=>{
    
    console.log(req.body);
     const newProject= new Project({
        projectname: req.body.projectname,
        tel:req.body.tel,
        email:req.body.email,
        details:req.body.details
     })

     try {
        await Project.create(newProject);
        await req.flash('info', 'New Project Added');
        res.redirect('/');

        
     } catch (error) {
          console.log('Error:', error);
     }


    
}


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

//View Project 

module.exports.viewProject=async (req, res)=> {

   try {
      const projects= await Project.findOne({_id: req.params.id});

      res.render('projects/view', {
         projects
      });
      
   } catch (error) {
        console.log('Error', error);
   }

}



module.exports.editProject= async(req, res)=>{

   try {
      const projects= await Project.findOne({_id: req.params.id});

      res.render('projects/edit', {
         projects
      });
      
   } catch (error) {
        console.log('Error', error);
   }

}


module.exports.editUpdateProject= async(req, res)=>{

   try {

      await Project.findByIdAndUpdate(req.params.id, {
         projectname: req.body.projectname,
         tel: req.body.tel,
         email: req.body.email,
         details: req.body.details,
         updatedAt: Date.now()
      });

      await res.redirect('/');
      
   } catch (error) {
       console.log('error', error);
   }
}


module.exports.deleteProject= async(req, res)=>{

   try {
      await Project.deleteOne({
         _id: req.params.id
      })
      res.redirect('/');
      
   } catch (error) {
      console.log('error', error);
   }

}

